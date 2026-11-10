import {
  ArrowRight,
  ArrowUpRight,
  Compass,
  Handshake,
  UsersThree,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { BlurFade, RepublicFlag } from "../components/MotionPrimitives";
import { assetUrl, EXTERNAL_LINKS, REPUBLIC_VALUES } from "../data/siteContent";

const VALUE_ICONS = [Handshake, Compass, UsersThree];

export function HomePage() {
  return (
    <div>
      <section
        aria-labelledby="hero-heading"
        className="relative w-full min-h-[560px] h-[84vh] max-h-[820px] flex items-end md:items-center overflow-hidden bg-[#1a201c]"
      >
        <img
          src={assetUrl("images/hero-landscape.webp")}
          onError={(e) => {
            const target = e.currentTarget;
            if (target.src !== EXTERNAL_LINKS.heroFallbackUrl) {
              target.src = EXTERNAL_LINKS.heroFallbackUrl;
            }
          }}
          alt="Pastoral countryside fields with the flag of the Goodfellows Republic flying on a wooden pole."
          className="absolute inset-0 w-full h-full object-cover object-[74%_center] md:object-[68%_center] select-none"
        />

        <div
          className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/48 via-black/20 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <div
          className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/32 to-transparent md:bg-gradient-to-r md:from-black/68 md:via-black/34 md:to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <div
          className="absolute inset-x-0 bottom-0 hero-fade bg-gradient-to-t from-[var(--white)] to-transparent pointer-events-none z-10"
          aria-hidden="true"
        />

        <div className="relative z-10 portal-container pt-24 pb-36 md:py-20">
          <div className="max-w-[540px]">
            <BlurFade inView={false} delay={0.05} yOffset={10} blur="10px">
              <p className="text-[12.5px] font-medium uppercase tracking-[0.1em] text-white/80 mb-3.5">
                Goodfellows Republic
              </p>
              <h1
                id="hero-heading"
                className="!text-white !text-[38px] sm:!text-[50px] md:!text-[60px] !leading-[1.05]"
              >
                One Republic.
                <br />A future we share.
              </h1>
            </BlurFade>

            <BlurFade inView={false} delay={0.14} yOffset={10} blur="10px">
              <p className="mt-5 text-[17.5px] sm:text-[18.5px] leading-relaxed text-white/88 max-w-[44ch]">
                A country built around fellowship. A community with a voice.
                Welcome to Goodfellows Republic.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Link to="/about" className="btn-primary">
                  <span>About the Republic</span>
                  <ArrowRight size={16} />
                </Link>
                <Link to="/constitution" className="btn-ghost-light">
                  <span>Constitution</span>
                </Link>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      <section aria-labelledby="values-heading" className="py-22 md:py-30">
        <div className="portal-container">
          <BlurFade>
            <div className="max-w-[540px]">
              <span className="eyebrow mb-3">Our values</span>
              <h2 id="values-heading">Guided by fellowship and respect.</h2>
            </div>
          </BlurFade>

          <div className="mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-14">
            {REPUBLIC_VALUES.map((value, idx) => {
              const Icon = VALUE_ICONS[idx] || Handshake;
              return (
                <BlurFade key={value.id} delay={idx * 0.07}>
                  <div>
                    <Icon
                      size={26}
                      weight="light"
                      className="text-[var(--theme)] mb-5"
                    />
                    <h3>{value.title}</h3>
                    <p className="mt-3 text-[16.5px] text-[var(--muted)] leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="identity-heading"
        className="bg-[var(--surface-soft)] py-22 md:py-30"
      >
        <div className="portal-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <BlurFade className="lg:col-span-5">
              <RepublicFlag
                className="w-full h-auto aspect-[3/2] rounded-lg"
                alt="National flag: three equal horizontal stripes of white, golden sand, and forest green."
              />
              <p className="mt-3.5 text-[13.5px] text-[var(--muted)]">
                White, golden sand, and forest green.
              </p>
            </BlurFade>

            <BlurFade delay={0.08} className="lg:col-span-7">
              <span className="eyebrow mb-3">Identity &amp; Law</span>
              <h2 id="identity-heading">
                Different colors, a common identity.
              </h2>
              <p className="mt-5 prose-width text-[var(--body)]">
                Goodfellows Republic brings together a shared national identity
                and a written Constitution defining our citizenship, rights, and
                representative institutions.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-8">
                <Link to="/about" className="quiet-link">
                  <span>Explore the Republic</span>
                  <ArrowRight size={16} className="text-[var(--theme)]" />
                </Link>
                <Link to="/constitution" className="quiet-link">
                  <span>Read the Constitution</span>
                  <ArrowRight size={16} className="text-[var(--theme)]" />
                </Link>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      <section aria-labelledby="join-heading" className="py-24 md:py-32">
        <div className="portal-container">
          <BlurFade className="max-w-[580px] mx-auto text-center">
            <span className="eyebrow mb-3">Civic life</span>
            <h2 id="join-heading">The next chapter starts with us.</h2>
            <p className="mt-4 text-[17.5px] text-[var(--muted)] leading-relaxed">
              Goodfellows Republic is a shared endeavor. Bring your perspective,
              meet the community, and help keep the conversation open.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={EXTERNAL_LINKS.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <span>Join Discord</span>
                <ArrowUpRight size={16} />
              </a>
              <Link to="/civic" className="btn-subtle">
                <span>Civic life</span>
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>
    </div>
  );
}
