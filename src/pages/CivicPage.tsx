import { ArrowUpRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { BlurFade } from "../components/MotionPrimitives";
import { EXTERNAL_LINKS } from "../data/siteContent";

export function CivicPage() {
  return (
    <div className="pt-28 pb-16 md:pt-34 md:pb-24">
      <div className="portal-container max-w-[720px]">
        <BlurFade inView={false}>
          <span className="eyebrow mb-3">Participation</span>
          <h1>Civic life</h1>
          <p className="mt-6 text-[18.5px] text-[var(--muted)] leading-relaxed">
            The Republic is a shared endeavor. Civic life begins with learning
            about one another, exchanging ideas, and taking an interest in our
            common future.
          </p>
        </BlurFade>

        <div className="mt-16 space-y-12">
          <BlurFade delay={0.06}>
            <h2 className="!text-[24px]">Constitutional framework</h2>
            <p className="mt-3 text-[var(--body)]">
              The{" "}
              <Link to="/constitution" className="inline-link">
                Constitution
              </Link>{" "}
              describes citizenship, political participation, elections, and
              community administration. Consult its provisions and the published
              procedures for the activity you wish to take part in.
            </p>
          </BlurFade>

          <BlurFade delay={0.1}>
            <h2 className="!text-[24px]">Get to know the Republic</h2>
            <p className="mt-3 text-[var(--body)]">
              Start with{" "}
              <Link to="/about" className="inline-link">
                an introduction to our country
              </Link>{" "}
              and{" "}
              <Link to="/values" className="inline-link">
                our shared values
              </Link>
              .
            </p>
          </BlurFade>

          <BlurFade delay={0.14}>
            <h2 className="!text-[24px]">Join the conversation</h2>
            <div className="mt-5">
              <a
                href={EXTERNAL_LINKS.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <span>Join our Discord server</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
            <p className="mt-5 text-[15px] text-[var(--muted)]">
              Please approach discussions with respect. Harassment,
              discrimination, and threats have no place in our community.
            </p>
          </BlurFade>
        </div>
      </div>
    </div>
  );
}
