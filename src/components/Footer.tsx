import {
  ArrowUpRight,
  Copyright,
  EnvelopeSimple,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { EXTERNAL_LINKS } from "../data/siteContent";
import { RepublicFlag } from "./MotionPrimitives";

export function Footer() {
  return (
    <footer className="bg-white border-t border-[var(--line)]">
      <div className="portal-container py-12 md:py-14">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <RepublicFlag className="w-[26px] h-[17px] rounded-[2px] shrink-0" />
              <span className="text-[14.5px] text-[var(--muted)]">
                <strong className="font-medium text-[var(--ink)]">
                  Goodfellows Republic
                </strong>{" "}
                · “Forever Green, Forever Free.”
              </span>
            </div>

            <a
              href={`mailto:${EXTERNAL_LINKS.email}`}
              className="inline-flex items-center gap-2 text-[14px] text-[var(--muted)] hover:text-[var(--ink)] transition-colors duration-150"
            >
              <EnvelopeSimple
                size={15}
                className="text-[var(--theme)] shrink-0"
              />
              <span>{EXTERNAL_LINKS.email}</span>
            </a>
          </div>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[14px] text-[var(--muted)]"
          >
            <Link
              to="/constitution"
              className="hover:text-[var(--ink)] transition-colors duration-150"
            >
              Constitution
            </Link>
            <Link
              to="/privacy"
              className="hover:text-[var(--ink)] transition-colors duration-150"
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className="hover:text-[var(--ink)] transition-colors duration-150"
            >
              Terms
            </Link>
            <a
              href={EXTERNAL_LINKS.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-[var(--ink)] transition-colors duration-150"
            >
              <span>Discord</span>
              <ArrowUpRight size={13} />
            </a>
            <a
              href={EXTERNAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-[var(--ink)] transition-colors duration-150"
            >
              <span>GitHub</span>
              <ArrowUpRight size={13} />
            </a>
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-[var(--line)] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[13.5px] text-[var(--muted)]">
          <p className="inline-flex items-center gap-1.5">
            <Copyright size={15} weight="regular" className="shrink-0" />
            <span>Goodfellows Republic 2026</span>
          </p>
          <p>Created by redsnicker</p>
        </div>
      </div>
    </footer>
  );
}
