import { DownloadSimple } from "@phosphor-icons/react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BlurFade } from "../components/MotionPrimitives";
import { assetUrl } from "../data/siteContent";
import { CONSTITUTION_DOCUMENT } from "../generated/constitution";

export function ConstitutionPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      const el = document.getElementById(targetId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 80);
      }
    }
  }, [location.hash]);

  return (
    <div className="pt-28 pb-20 md:pt-34 md:pb-28">
      <div className="portal-container max-w-[740px]">
        <BlurFade inView={false}>
          <div className="flex items-start justify-between gap-5 pb-8 border-b border-[var(--line)]">
            <div>
              <h1>{CONSTITUTION_DOCUMENT.title}</h1>
              {CONSTITUTION_DOCUMENT.subtitleLines.length > 0 && (
                <p className="mt-3 text-[16.5px] text-[var(--muted)]">
                  {CONSTITUTION_DOCUMENT.subtitleLines.join(" · ")}
                </p>
              )}
            </div>

            <a
              href={assetUrl("documents/constitution.pdf")}
              download="Constitution-of-the-Goodfellows-Republic.pdf"
              aria-label="Download Constitution PDF"
              title="Download PDF"
              className="mt-1.5 inline-flex items-center justify-center w-9 h-9 rounded-lg border border-[var(--line)] text-[var(--muted)] hover:text-[var(--ink)] hover:border-[var(--theme)] hover:bg-[var(--surface-soft)] transition-colors duration-150 shrink-0"
            >
              <DownloadSimple size={18} weight="regular" />
            </a>
          </div>
        </BlurFade>

        <BlurFade inView={false} delay={0.07} className="mt-12 space-y-14">
          {CONSTITUTION_DOCUMENT.chapters.map((chapter) => (
            <article
              key={chapter.id}
              id={chapter.id}
              className="scroll-mt-24"
            >
              {chapter.eyebrow && (
                <span className="eyebrow mb-1.5">{chapter.eyebrow}</span>
              )}
              <h2 className="!text-[25px] md:!text-[29px]">{chapter.title}</h2>

              {chapter.paragraphs.length > 0 && (
                <div className="mt-4 space-y-4 text-[16.5px] leading-[1.72] text-[var(--body)]">
                  {chapter.paragraphs.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              )}

              {chapter.sections.length > 0 && (
                <div className="mt-7 space-y-7">
                  {chapter.sections.map((section) => (
                    <section
                      key={section.id}
                      id={section.id}
                      className="scroll-mt-24"
                    >
                      <h3 className="!text-[18.5px]">{section.heading}</h3>
                      <div className="mt-2.5 space-y-2.5 text-[16.5px] leading-[1.7] text-[var(--body)]">
                        {section.paragraphs.map((clause, cIdx) => (
                          <p key={cIdx}>{clause}</p>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              )}
            </article>
          ))}
        </BlurFade>
      </div>
    </div>
  );
}
