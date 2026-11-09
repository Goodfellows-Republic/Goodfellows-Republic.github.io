import { ArrowLeft } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { BlurFade } from "../components/MotionPrimitives";

export function NotFoundPage() {
  return (
    <section className="min-h-[calc(100vh-145px)] flex flex-col items-center justify-center px-6 pt-24 pb-16 text-center">
      <BlurFade inView={false} blur="10px" yOffset={10}>
        <div
          aria-label="404"
          className="pointer-events-none select-none inline-flex items-baseline justify-center text-[clamp(124px,21vw,216px)] font-bold leading-[0.9] tracking-[-0.04em] text-[var(--ink)]"
        >
          <span>4</span>
          <span
            style={{
              WebkitTextStroke: "0.065em var(--white)",
              paintOrder: "stroke fill",
            }}
            className="relative z-10 -mx-[0.075em]"
          >
            0
          </span>
          <span>4</span>
        </div>

        <h1 className="mt-4 !text-[18.5px] sm:!text-[20.5px] !font-normal !text-[var(--muted)] !tracking-[-0.01em]">
          Page not found
        </h1>

        <div className="mt-7">
          <Link
            to="/"
            className="quiet-link text-[var(--muted)] hover:text-[var(--ink)]"
          >
            <ArrowLeft size={15} className="text-[var(--theme)]" />
            <span>Return home</span>
          </Link>
        </div>
      </BlurFade>
    </section>
  );
}
