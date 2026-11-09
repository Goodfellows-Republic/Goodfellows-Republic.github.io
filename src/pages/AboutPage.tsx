import { ArrowRight, DownloadSimple } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { BlurFade, RepublicFlag } from "../components/MotionPrimitives";
import { assetUrl, NATIONAL_COLORS } from "../data/siteContent";

export function AboutPage() {
  return (
    <div className="pt-28 pb-16 md:pt-34 md:pb-24">
      <div className="portal-container max-w-[760px]">
        <BlurFade inView={false}>
          <span className="eyebrow mb-3">The Republic</span>
          <h1>About the Republic</h1>
          <p className="mt-6 text-[18.5px] text-[var(--muted)] leading-relaxed">
            Goodfellows Republic is a country brought together by a shared
            identity and a spirit of fellowship. This website introduces the
            Republic and provides a place to learn about its values and
            community.
          </p>
        </BlurFade>

        <BlurFade delay={0.08} className="mt-16 md:mt-20">
          <h2 id="our-national-colors" className="scroll-mt-24">
            Our national colors
          </h2>
          <p className="mt-4 text-[var(--body)]">
            Our flag has three horizontal stripes of equal height:{" "}
            <strong className="font-medium text-[var(--ink)]">white</strong> (
            <code>#FFFFFF</code>),{" "}
            <strong className="font-medium text-[var(--ink)]">
              golden sand
            </strong>{" "}
            (<code>#FFD284</code>), and{" "}
            <strong className="font-medium text-[var(--ink)]">
              forest green
            </strong>{" "}
            (<code>#3E5524</code>), from top to bottom.
          </p>

          <div className="mt-8">
            <RepublicFlag
              className="w-full max-w-[520px] h-auto aspect-[3/2] rounded-lg"
              alt="The flag of Goodfellows Republic"
            />
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 text-[14.5px] text-[var(--muted)]">
            {NATIONAL_COLORS.map((color) => (
              <div key={color.hex} className="inline-flex items-center gap-2.5">
                <span
                  className="w-3.5 h-3.5 rounded-full border border-[#dfe4e1] inline-block"
                  style={{ backgroundColor: color.hex }}
                  aria-hidden="true"
                />
                <span className="text-[var(--ink)] font-medium">
                  {color.name}
                </span>
                <span>{color.hex}</span>
              </div>
            ))}
          </div>
        </BlurFade>

        <BlurFade delay={0.12} className="mt-16 md:mt-20">
          <h2 id="our-constitution">Our Constitution</h2>
          <p className="mt-4 text-[var(--body)]">
            The{" "}
            <Link to="/constitution" className="inline-link">
              Constitution of the Goodfellows Republic
            </Link>{" "}
            sets out the Republic&apos;s institutions, citizenship, rights, and
            government procedures. It describes the Republic as a constitutional
            republic administered primarily through its recognized Discord
            community.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link to="/constitution" className="btn-primary">
              <span>Read the Constitution</span>
              <ArrowRight size={16} />
            </Link>
            <a
              href={assetUrl("documents/constitution.pdf")}
              download="Constitution-of-the-Goodfellows-Republic.pdf"
              aria-label="Download Constitution PDF"
              title="Download PDF"
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-[var(--line)] text-[var(--muted)] hover:text-[var(--ink)] hover:border-[var(--theme)] hover:bg-[var(--surface-soft)] transition-colors duration-150"
            >
              <DownloadSimple size={18} />
            </a>
          </div>
        </BlurFade>
      </div>
    </div>
  );
}
