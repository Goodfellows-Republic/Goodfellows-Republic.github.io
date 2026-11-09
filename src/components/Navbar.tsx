import {
  DiscordLogo,
  GithubLogo,
  MagnifyingGlass,
  Moon,
  Sun,
} from "@phosphor-icons/react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { EXTERNAL_LINKS } from "../data/siteContent";
import { RepublicFlag } from "./MotionPrimitives";
import { SearchDialog } from "./SearchDialog";

const NAV_ITEMS = [
  { label: "About", path: "/about" },
  { label: "Values", path: "/values" },
  { label: "Constitution", path: "/constitution" },
  { label: "Civic life", path: "/civic" },
];

const APPLE_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function Navbar() {
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();
  const [darkMode, setDarkMode] = useState(() => document.documentElement.dataset.theme === "dark");
  const toggleTheme = () => {
    const next = !darkMode;
    setDarkMode(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    try { localStorage.setItem("theme", next ? "dark" : "light"); } catch { }
  };
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [viewportWidth, setViewportWidth] = useState<number>(() =>
    typeof document !== "undefined" ? document.documentElement.clientWidth : 1280
  );

  const isHome = location.pathname === "/";
  const heroLightMode = isHome && !scrolled && !mobileOpen;

  const themeButton = (
    <button type="button" onClick={toggleTheme} aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"} title={darkMode ? "Light mode" : "Dark mode"} className={`p-1.5 rounded-md cursor-pointer transition-colors duration-150 ${heroLightMode ? "text-white/85 hover:text-white" : "text-[var(--muted)] hover:text-[var(--ink)]"}`}>
      {darkMode ? <Sun size={19} /> : <Moon size={19} />}
    </button>
  );

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      setScrolled((wasScrolled) => wasScrolled ? scrollY > 12 : scrollY > 40);
    };
    const onResize = () => setViewportWidth(document.documentElement.clientWidth);

    onScroll();
    onResize();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (viewportWidth >= 1024) setMobileOpen(false);
  }, [viewportWidth]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const scrolledMaxWidth =
    viewportWidth < 1024
      ? Math.max(viewportWidth - 28, 0)
      : Math.min(Math.round(viewportWidth * 0.86), 920);
  const targetWidth = scrolled ? scrolledMaxWidth : viewportWidth;

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 flex justify-center pointer-events-none">
        <motion.div
          initial={false}
          animate={{
            width: targetWidth,
            y: scrolled ? 12 : 0,
            borderRadius: scrolled ? 14 : 0,
          }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: 0.42, ease: APPLE_EASE }
          }
          style={{ transformOrigin: "center top" }}
          className={`pointer-events-auto overflow-hidden transition-[background-color,border-color,box-shadow,backdrop-filter] duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            scrolled || mobileOpen
              ? "bg-[var(--nav-bg)] backdrop-blur-xl border border-[var(--line)] shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
              : isHome
              ? "bg-transparent border border-transparent"
              : "bg-[var(--nav-bg)] backdrop-blur-md border border-x-transparent border-t-transparent border-b-[var(--line)]"
          }`}
        >
          <div
            className={`w-full max-w-[1140px] mx-auto flex items-center justify-between transition-[padding] duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              scrolled
                ? "px-5 sm:px-6 py-3"
                : "px-[clamp(22px,5vw,48px)] py-5"
            }`}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-3 shrink-0"
              aria-label="Goodfellows Republic - Home"
            >
              <RepublicFlag
                className={`w-[27px] h-[18px] rounded-[2px] shrink-0 ${
                  heroLightMode ? "!border-white/30" : ""
                }`}
              />
              <span
                className={`text-[15.5px] font-semibold tracking-[-0.015em] transition-colors duration-200 ${
                  heroLightMode ? "text-white" : "text-[var(--ink)]"
                }`}
              >
                <span className="max-[420px]:hidden">Goodfellows Republic</span>
                <span className="hidden max-[420px]:inline">Goodfellows</span>
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-7">
              <nav
                aria-label="Main navigation"
                className="flex items-center gap-7"
              >
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    data-active={location.pathname.startsWith(item.path)}
                    data-hero-light={heroLightMode}
                    className="nav-item-link"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <span
                className={`h-4 w-px transition-colors duration-200 ${
                  heroLightMode ? "bg-white/25" : "bg-[var(--line)]"
                }`}
                aria-hidden="true"
              />

              <div className="flex items-center gap-3">
                {themeButton}
                <a
                  href={EXTERNAL_LINKS.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Discord community"
                  className={`p-1.5 rounded-md transition-colors duration-150 ${
                    heroLightMode
                      ? "text-white/85 hover:text-white"
                      : "text-[var(--muted)] hover:text-[var(--ink)]"
                  }`}
                >
                  <DiscordLogo size={19} weight="regular" />
                </a>

                <a
                  href={EXTERNAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub organization"
                  className={`p-1.5 rounded-md transition-colors duration-150 ${
                    heroLightMode
                      ? "text-white/85 hover:text-white"
                      : "text-[var(--muted)] hover:text-[var(--ink)]"
                  }`}
                >
                  <GithubLogo size={19} weight="regular" />
                </a>

                <button
                  type="button"
                  onClick={() => setSearchOpen(true)}
                  aria-label="Search"
                  className={`p-1.5 rounded-md transition-colors duration-150 cursor-pointer ${
                    heroLightMode
                      ? "text-white/85 hover:text-white"
                      : "text-[var(--muted)] hover:text-[var(--ink)]"
                  }`}
                >
                  <MagnifyingGlass size={18} weight="regular" />
                </button>
              </div>
            </div>

            <div className="flex lg:hidden items-center gap-3">
              {themeButton}
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                aria-label="Search"
                className={`p-1.5 cursor-pointer transition-colors duration-150 ${
                  heroLightMode ? "text-white" : "text-[var(--ink)]"
                }`}
              >
                <MagnifyingGlass size={19} />
              </button>
              <button
                type="button"
                onClick={() => setMobileOpen((prev) => !prev)}
                aria-expanded={mobileOpen}
                aria-controls="mobile-navigation"
                className={`text-[15px] font-medium py-1 cursor-pointer transition-colors duration-150 ${
                  heroLightMode ? "text-white" : "text-[var(--ink)]"
                }`}
              >
                {mobileOpen ? "Close" : "Menu"}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                id="mobile-navigation"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.3, ease: APPLE_EASE }}
                className="lg:hidden w-full overflow-hidden"
              >
                <nav
                  aria-label="Mobile navigation"
                  className="flex flex-col gap-1 border-t border-[var(--line)] px-6 py-4"
                >
                  {NAV_ITEMS.map((item) => {
                    const active = location.pathname.startsWith(item.path);
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`py-2.5 text-[16.5px] font-medium ${
                          active ? "text-[var(--ink)]" : "text-[var(--muted)]"
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}

                  <div className="mt-3 pt-3 border-t border-[var(--line)] flex items-center gap-5 text-[var(--muted)]">
                    <a
                      href={EXTERNAL_LINKS.discord}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Discord community"
                      className="inline-flex items-center gap-2 text-[14.5px] hover:text-[var(--ink)]"
                    >
                      <DiscordLogo size={19} />
                      <span>Discord</span>
                    </a>
                    <a
                      href={EXTERNAL_LINKS.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub organization"
                      className="inline-flex items-center gap-2 text-[14.5px] hover:text-[var(--ink)]"
                    >
                      <GithubLogo size={19} />
                      <span>GitHub</span>
                    </a>
                  </div>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </header>

      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
