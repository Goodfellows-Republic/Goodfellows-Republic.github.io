import { ArrowRight, Compass, Handshake, UsersThree } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { BlurFade } from "../components/MotionPrimitives";
import { REPUBLIC_VALUES } from "../data/siteContent";

const ICONS = [Handshake, Compass, UsersThree];

export function ValuesPage() {
  return (
    <div className="pt-28 pb-16 md:pt-34 md:pb-24">
      <div className="portal-container max-w-[720px]">
        <BlurFade inView={false}>
          <span className="eyebrow mb-3">Principles</span>
          <h1>Our values</h1>
        </BlurFade>

        <div className="mt-14 space-y-14">
          {REPUBLIC_VALUES.map((val, idx) => {
            const Icon = ICONS[idx] || Handshake;
            return (
              <BlurFade key={val.id} delay={0.06 + idx * 0.06}>
                <section id={val.id} className="scroll-mt-24">
                  <div className="flex items-center gap-3 mb-2.5">
                    <Icon
                      size={22}
                      weight="light"
                      className="text-[var(--theme)] shrink-0"
                    />
                    <h2 className="!text-[24px]">{val.title}</h2>
                  </div>
                  <p className="text-[18px] text-[var(--muted)] leading-relaxed">
                    {val.description}
                  </p>
                </section>
              </BlurFade>
            );
          })}
        </div>

        <BlurFade delay={0.22} className="mt-16 pt-10 border-t border-[var(--line)]">
          <Link to="/civic" className="quiet-link">
            <span>Explore civic life</span>
            <ArrowRight size={16} className="text-[var(--theme)]" />
          </Link>
        </BlurFade>
      </div>
    </div>
  );
}
