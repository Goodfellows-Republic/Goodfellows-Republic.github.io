import { DownloadSimple } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { BlurFade } from "../components/MotionPrimitives";
import { assetUrl } from "../data/siteContent";
import { loadConstitution, type ConstitutionPageText } from "../lib/loadConstitution";

export function ConstitutionPage() {
  const [pages, setPages] = useState<ConstitutionPageText[] | null>(null);
  const [failed, setFailed] = useState(false);
  const { hash } = useLocation();

  useEffect(() => {
    let active = true;
    loadConstitution().then((result) => {
      if (active) setPages(result);
    }).catch(() => {
      if (active) setFailed(true);
    });
    return () => { active = false; };
  }, []);

  useEffect(() => {
    if (pages && hash) {
      const timer = window.setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ block: "start" }), 80);
      return () => window.clearTimeout(timer);
    }
  }, [pages, hash]);

  return (
    <div className="pt-28 pb-20 md:pt-34 md:pb-28">
      <div className="portal-container max-w-[740px]">
        <BlurFade inView={false}>
          <div className="flex items-start justify-between gap-5 pb-8 border-b border-[var(--line)]">
            <h1>Constitution</h1>
            <a href={assetUrl("documents/constitution.pdf")} download="Constitution-of-the-Goodfellows-Republic.pdf" aria-label="Download Constitution PDF" title="Download PDF" className="mt-1.5 inline-flex items-center justify-center w-9 h-9 rounded-lg border border-[var(--line)] text-[var(--muted)] hover:text-[var(--ink)] hover:border-[var(--theme)] hover:bg-[var(--surface-soft)] transition-colors duration-150 shrink-0">
              <DownloadSimple size={18} weight="regular" />
            </a>
          </div>
        </BlurFade>
        <div className="mt-12 text-[16.5px] leading-[1.72] text-[var(--body)]" aria-live="polite">
          {!pages && !failed && <p className="text-[var(--muted)]">Loading the Constitution...</p>}
          {failed && <p>Unable to read the Constitution PDF. Please use the download button above to view it.</p>}
          {pages?.map((blocks, i) => (
            <section key={i} id={`page-${i + 1}`} aria-label={`Page ${i + 1}`} className="space-y-4 mb-10 scroll-mt-24">
              {blocks.length === 0 && <p className="text-[var(--muted)]">Page {i + 1} has no selectable text. Please download the PDF to view it.</p>}
              {blocks.map((block, index) => block.kind === "heading" ? (
                <h2 key={index} className="!text-[20px] !leading-[1.35] pt-4">{block.text}</h2>
              ) : <p key={index}>{block.text}</p>)}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
