import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { assetUrl } from "../data/siteContent";

interface BlurFadeProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  blur?: string;
  inView?: boolean;
  className?: string;
}

const APPLE_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function BlurFade({
  children,
  delay = 0,
  duration = 0.65,
  yOffset = 12,
  blur = "10px",
  inView = true,
  className = "",
}: BlurFadeProps) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const shouldAnimate = inView ? isInView : true;

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: yOffset,
        filter: `blur(${blur})`,
      }}
      animate={
        shouldAnimate
          ? {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }
          : {
              opacity: 0,
              y: yOffset,
              filter: `blur(${blur})`,
            }
      }
      transition={{
        duration,
        delay,
        ease: APPLE_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface PageBlurTransitionProps {
  children: ReactNode;
}

export function PageBlurTransition({ children }: PageBlurTransitionProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(6px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, filter: "blur(4px)" }}
      transition={{ duration: 0.22, ease: APPLE_EASE }}
    >
      {children}
    </motion.div>
  );
}

interface RepublicFlagProps {
  className?: string;
  alt?: string;
}

export function RepublicFlag({
  className = "w-7 h-[18px] rounded-[3px]",
  alt = "National flag of the Goodfellows Republic",
}: RepublicFlagProps) {
  const pngFallback = assetUrl("brand/flag.png");
  return (
    <img
      src={assetUrl("brand/flag.svg")}
      onError={(e) => {
        const target = e.currentTarget;
        if (!target.src.endsWith("brand/flag.png")) {
          target.src = pngFallback;
        }
      }}
      alt={alt}
      className={`block border border-[#e5e8e6] select-none ${className}`}
    />
  );
}
