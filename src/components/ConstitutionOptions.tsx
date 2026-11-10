import { DownloadSimple, FilePdf } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useId, useRef, useState } from "react";
import { assetUrl, EXTERNAL_LINKS } from "../data/siteContent";

interface ConstitutionOptionsProps {
  className?: string;
}

export function ConstitutionOptions({ className = "" }: ConstitutionOptionsProps) {
  const [open, setOpen] = useState(false);
  const [align, setAlign] = useState<"left" | "right">("right");
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={containerRef}
      className={`relative shrink-0 ${className}`}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpen(false);
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-label="Constitution download options"
        title="Constitution options"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => {
          if (!open && buttonRef.current) {
            setAlign(buttonRef.current.getBoundingClientRect().right < Math.min(224, window.innerWidth - 44) + 12 ? "left" : "right");
          }
          setOpen((value) => !value);
        }}
        className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-[var(--line)] text-[var(--muted)] hover:text-[var(--ink)] hover:border-[var(--theme)] hover:bg-[var(--surface-soft)] transition-colors duration-150 cursor-pointer"
      >
        <DownloadSimple size={18} weight="regular" />
      </button>
      <motion.div
          id={panelId}
          initial={false}
          animate={open
            ? { opacity: 1, y: 0, filter: "blur(0px)", visibility: "visible" }
            : { opacity: 0, y: -6, filter: "blur(6px)", transitionEnd: { visibility: "hidden" } }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ pointerEvents: open ? "auto" : "none" }}
          inert={!open}
          aria-hidden={!open}
          className={`absolute top-full mt-2 ${align === "right" ? "right-0" : "left-0"} z-30 w-56 max-w-[calc(100vw-44px)] rounded-xl border border-[var(--line)] bg-[var(--white)] p-1.5 shadow-[0_12px_32px_rgba(0,0,0,0.12)]`}
        >
          <a
            href={assetUrl("documents/constitution.pdf")}
            download="Constitution-of-the-Goodfellows-Republic.pdf"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-[14px] font-medium text-[var(--body)] hover:bg-[var(--surface-soft)] hover:text-[var(--ink)] transition-colors duration-150"
          >
            <FilePdf size={19} className="shrink-0 text-[#dc5650]" aria-hidden="true" />
            <span>Download PDF</span>
          </a>
          <a
            href={EXTERNAL_LINKS.constitutionDrive}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-[14px] font-medium text-[var(--body)] hover:bg-[var(--surface-soft)] hover:text-[var(--ink)] transition-colors duration-150"
          >
            <svg width="19" height="19" viewBox="0 0 24 24" className="shrink-0" aria-hidden="true">
              <path fill="#34a853" d="M8.5 5.5 12 11 5 22 2 17z" />
              <path fill="#fbbc04" d="M8.5 5.5H15L22 17h-6.6z" />
              <path fill="#4285f4" d="M8.7 17H22l-3 5H5z" />
            </svg>
            <span>Open in Google Drive</span>
          </a>
      </motion.div>
    </div>
  );
}
