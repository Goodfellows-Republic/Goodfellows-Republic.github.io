import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Footer } from "./components/Footer";
import { PageBlurTransition } from "./components/MotionPrimitives";
import { Navbar } from "./components/Navbar";
import { AboutPage } from "./pages/AboutPage";
import { CivicPage } from "./pages/CivicPage";
import { ConstitutionPage } from "./pages/ConstitutionPage";
import { HomePage } from "./pages/HomePage";
import { PrivacyPage, TermsPage } from "./pages/LegalPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ValuesPage } from "./pages/ValuesPage";

const rawBase = import.meta.env.BASE_URL || "/";
const routerBase = rawBase === "/" ? "/" : rawBase.replace(/\/+$/, "");

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 60);
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <PageBlurTransition key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/republic" element={<AboutPage />} />
          <Route path="/values" element={<ValuesPage />} />
          <Route path="/constitution" element={<ConstitutionPage />} />
          <Route path="/civic" element={<CivicPage />} />
          <Route path="/community" element={<CivicPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </PageBlurTransition>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter basename={routerBase}>
      <ScrollManager />
      <div className="min-h-screen flex flex-col bg-white text-[var(--body)]">
        <Navbar />
        <main id="main-content" className="flex-1">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
