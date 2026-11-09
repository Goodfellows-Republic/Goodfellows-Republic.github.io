import { ArrowRight, MagnifyingGlass, X } from "@phosphor-icons/react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CONSTITUTION_DOCUMENT } from "../generated/constitution";

interface SearchEntry {
  id: string;
  category: string;
  title: string;
  snippet: string;
  path: string;
}

const STATIC_ENTRIES: SearchEntry[] = [
  {
    id: "home",
    category: "Overview",
    title: "Goodfellows Republic",
    snippet: "A country built around fellowship. A community with a voice.",
    path: "/",
  },
  {
    id: "about",
    category: "Page",
    title: "About the Republic",
    snippet:
      "National identity, the three stripes of our flag (#FFFFFF, #FFD284, #3E5524), and our Constitution.",
    path: "/about",
  },
  {
    id: "values",
    category: "Page",
    title: "Our values",
    snippet: "Fellowship, respect, and shared responsibility.",
    path: "/values",
  },
  {
    id: "constitution",
    category: "Constitution",
    title: CONSTITUTION_DOCUMENT.title,
    snippet:
      CONSTITUTION_DOCUMENT.subtitleLines.join(" · ") ||
      "The supreme law of the Goodfellows Republic.",
    path: "/constitution",
  },
  {
    id: "civic",
    category: "Page",
    title: "Civic life",
    snippet:
      "Constitutional framework, learning about the Republic, and joining Discord.",
    path: "/civic",
  },
  {
    id: "privacy",
    category: "Legal",
    title: "Privacy Policy",
    snippet:
      "Information handled by the website and Discord bot, and record retention.",
    path: "/privacy",
  },
  {
    id: "terms",
    category: "Legal",
    title: "Terms of Service",
    snippet:
      "Conditions for using the Goodfellows Republic website and Discord bot.",
    path: "/terms",
  },
];

const CHAPTER_ENTRIES: SearchEntry[] = CONSTITUTION_DOCUMENT.chapters.map(
  (ch) => ({
    id: `const-${ch.id}`,
    category: "Constitution",
    title: ch.eyebrow ? `${ch.eyebrow} — ${ch.title}` : ch.title,
    snippet:
      ch.paragraphs[0] ||
      ch.sections[0]?.paragraphs[0] ||
      ch.sections[0]?.heading ||
      "Constitutional provision.",
    path: `/constitution#${ch.id}`,
  })
);

const ALL_ENTRIES = [...STATIC_ENTRIES, ...CHAPTER_ENTRIES];

interface SearchDialogProps {
  open: boolean;
  onClose: () => void;
}

export function SearchDialog({ open, onClose }: SearchDialogProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 40);
    } else {
      setQuery("");
    }
  }, [open]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return STATIC_ENTRIES.slice(0, 5);
    return ALL_ENTRIES.filter(
      (entry) =>
        entry.title.toLowerCase().includes(q) ||
        entry.snippet.toLowerCase().includes(q) ||
        entry.category.toLowerCase().includes(q)
    ).slice(0, 12);
  }, [query]);

  return (
    <AnimatePresence>
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center pt-[12vh] px-4"
          role="dialog"
          aria-modal="true"
          aria-label="Search"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.16 }}
            className="fixed inset-0 bg-black/25 backdrop-blur-[2px]"
            onClick={onClose}
          />
          <motion.div
            initial={
              prefersReducedMotion
                ? { opacity: 1 }
                : { opacity: 0, y: 8, filter: "blur(8px)" }
            }
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-[580px] bg-white rounded-xl border border-[var(--line)] overflow-hidden"
          >
            <div className="flex items-center gap-3 px-5 py-4 border-b border-[var(--line)]">
              <MagnifyingGlass
                size={19}
                className="text-[var(--muted)] shrink-0"
              />
              <input
                ref={inputRef}
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search pages and Constitution…"
                className="w-full text-[15.5px] text-[var(--ink)] placeholder:text-[var(--muted)] bg-transparent border-0 focus:outline-none"
              />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="p-1 text-[var(--muted)] hover:text-[var(--ink)] cursor-pointer"
              >
                <X size={17} />
              </button>
            </div>

            <div className="max-h-[54vh] overflow-y-auto divide-y divide-[var(--line)]">
              {results.length === 0 ? (
                <div className="px-5 py-10 text-center text-[15px] text-[var(--muted)]">
                  No results for “{query}”.
                </div>
              ) : (
                results.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      onClose();
                      navigate(item.path);
                    }}
                    className="w-full text-left px-5 py-3.5 hover:bg-[var(--surface-soft)] transition-colors duration-150 flex items-center justify-between gap-4 group cursor-pointer"
                  >
                    <div>
                      <div className="text-[11.5px] font-medium uppercase tracking-[0.06em] text-[var(--theme)]">
                        {item.category}
                      </div>
                      <div className="text-[15.5px] font-medium text-[var(--ink)] mt-0.5">
                        {item.title}
                      </div>
                      <p className="text-[13.5px] text-[var(--muted)] mt-0.5 line-clamp-1">
                        {item.snippet}
                      </p>
                    </div>
                    <ArrowRight
                      size={16}
                      className="text-[var(--muted)] group-hover:text-[var(--ink)] shrink-0"
                    />
                  </button>
                ))
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
