import sharp from "sharp";
import { join } from "path";

const source = join(process.cwd(), "public/images/nocta-mark-source.png");
const outDir = join(process.cwd(), "public/images");

const trimmed = await sharp(source)
  .ensureAlpha()
  .trim({ threshold: 5 })
  .png()
  .toBuffer();

await sharp(trimmed).png().toFile(join(outDir, "nocta-mark.png"));

const icon32 = await sharp(trimmed)
  .resize(32, 32, {
    fit: "contain",
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .png()
  .toBuffer();

await sharp(icon32).toFile(join(process.cwd(), "app/icon.png"));

const apple = await sharp(trimmed)
  .resize(180, 180, {
    fit: "contain",
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .png()
  .toBuffer();

await sharp(apple).toFile(join(process.cwd(), "app/apple-icon.png"));

console.log("Generated nocta-mark.png, app/icon.png, app/apple-icon.png");
