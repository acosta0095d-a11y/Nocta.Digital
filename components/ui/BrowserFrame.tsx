import Image from "next/image";

type BrowserFrameProps = {
  url: string;
  tabLabel?: string;
  favicon?: string;
  className?: string;
  children: React.ReactNode;
};

export function BrowserFrame({
  url,
  tabLabel,
  favicon,
  className = "",
  children,
}: BrowserFrameProps) {
  const displayUrl = url.replace(/^https?:\/\//, "");
  const label = tabLabel ?? displayUrl;

  return (
    <div className={`browser-frame ${className}`}>
      <div className="browser-frame__chrome">
        <div className="browser-frame__tabs-head">
          <div className="browser-frame__tabs">
            <div className="browser-frame__tab-open">
              <div className="browser-frame__rounded-l">
                <div className="browser-frame__mask-round" />
              </div>
              <div className="browser-frame__tab-label">
                {favicon && (
                  <Image
                    src={favicon}
                    alt=""
                    width={14}
                    height={14}
                    className="browser-frame__favicon"
                  />
                )}
                <span className="browser-frame__tab-title">{label}</span>
              </div>
              <span className="browser-frame__close-tab" aria-hidden>
                ✕
              </span>
              <div className="browser-frame__rounded-r">
                <div className="browser-frame__mask-round" />
              </div>
            </div>
          </div>

          <div className="browser-frame__window-opt" aria-hidden>
            <button type="button" tabIndex={-1}>
              −
            </button>
            <button type="button" tabIndex={-1}>
              □
            </button>
            <button type="button" className="browser-frame__window-close" tabIndex={-1}>
              ✕
            </button>
          </div>
        </div>

        <div className="browser-frame__head-browser">
          <button type="button" tabIndex={-1} aria-hidden>
            ←
          </button>
          <button type="button" disabled tabIndex={-1} aria-hidden>
            →
          </button>
          <input
            type="text"
            readOnly
            value={displayUrl}
            aria-label="URL del sitio"
            tabIndex={-1}
          />
          <button type="button" tabIndex={-1} aria-hidden>
            ⋮
          </button>
          <button type="button" className="browser-frame__star" tabIndex={-1} aria-hidden>
            ✰
          </button>
        </div>
      </div>

      <div className="browser-frame__body browser-frame__body--preview">{children}</div>
    </div>
  );
}
