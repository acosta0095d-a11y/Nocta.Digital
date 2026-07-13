import sharp from "sharp";
import { join } from "path";
import { writeFileSync } from "fs";

const markPath = join(process.cwd(), "public/images/nocta-mark.png");
const publicDir = join(process.cwd(), "public");
const appDir = join(process.cwd(), "app");

const mark = sharp(markPath).ensureAlpha();
const markMeta = await mark.metadata();
const markBuf = await mark.png().toBuffer();

async function placeOnCanvas(size, background) {
  const padding = Math.round(size * 0.18);
  const inner = size - padding * 2;

  const resized = await sharp(markBuf)
    .resize(inner, inner, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();

  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background,
    },
  })
    .composite([{ input: resized, gravity: "centre" }])
    .png()
    .toBuffer();
}

const transparent = { r: 0, g: 0, b: 0, alpha: 0 };
const appleBg = { r: 245, g: 245, b: 247, alpha: 1 };

const icon16 = await placeOnCanvas(16, transparent);
const icon32 = await placeOnCanvas(32, transparent);
const icon48 = await placeOnCanvas(48, transparent);
const apple180 = await placeOnCanvas(180, appleBg);
const appIcon32 = await placeOnCanvas(32, transparent);
const appApple180 = await placeOnCanvas(180, appleBg);

writeFileSync(join(publicDir, "favicon-32x32.png"), icon32);
writeFileSync(join(publicDir, "apple-touch-icon.png"), apple180);
writeFileSync(join(appDir, "icon.png"), appIcon32);
writeFileSync(join(appDir, "apple-icon.png"), appApple180);

// Minimal ICO with 16 + 32 (PNG-compressed images inside ICO)
function createIco(pngBuffers) {
  const count = pngBuffers.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);

  const entries = [];
  let offset = headerSize + dirEntrySize * count;

  for (const png of pngBuffers) {
    const meta = sharp(png);
    // size encoded later from buffer dims via reading IHDR is overkill; pass size params
    entries.push({ png, offset });
    offset += png.length;
  }

  // Rebuild with known sizes: 16 then 32
  const sizes = [16, 32];
  offset = headerSize + dirEntrySize * count;
  const dir = Buffer.alloc(dirEntrySize * count);
  const parts = [header];

  for (let i = 0; i < count; i++) {
    const png = pngBuffers[i];
    const size = sizes[i];
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(size === 256 ? 0 : size, 0);
    entry.writeUInt8(size === 256 ? 0 : size, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(png.length, 8);
    entry.writeUInt32LE(offset, 12);
    dir.set(entry, i * dirEntrySize);
    offset += png.length;
  }

  return Buffer.concat([header, dir, ...pngBuffers]);
}

const ico = createIco([icon16, icon32]);
writeFileSync(join(publicDir, "favicon.ico"), ico);
writeFileSync(join(appDir, "favicon.ico"), ico);

console.log(
  `SEO favicons ready (source ${markMeta.width}x${markMeta.height}): favicon.ico, favicon-32x32.png, apple-touch-icon.png`
);
