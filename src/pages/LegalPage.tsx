import { ArrowUpRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { BlurFade } from "../components/MotionPrimitives";
import { EXTERNAL_LINKS, PRIVACY_RECORDS_TABLE } from "../data/siteContent";

export function PrivacyPage() {
  return (
    <div className="pt-28 pb-16 md:pt-34 md:pb-24">
      <div className="portal-container max-w-[720px]">
        <BlurFade inView={false}>
          <span className="eyebrow mb-3">Last updated: November 6, 2026</span>
          <h1>Privacy Policy</h1>
        </BlurFade>

        <div className="mt-12 space-y-10 text-[16.5px] leading-[1.68] text-[var(--body)]">
          <BlurFade delay={0.04}>
            <h2 className="!text-[22px] mb-3">1. Scope and contact</h2>
            <p>
              This policy covers the{" "}
              <strong className="font-medium text-[var(--ink)]">
                Goodfellows Republic website and Goodfellows Republic Discord
                bot
              </strong>
              , together referred to as our services. Goodfellows Republic
              operates these services for its community and internal
              administration.
            </p>
            <p className="mt-3">
              For privacy questions or requests about either service, open a
              ticket through the Republic&apos;s{" "}
              <a
                href={EXTERNAL_LINKS.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-link"
              >
                Discord community <ArrowUpRight size={13} className="inline" />
              </a>{" "}
              and identify it as a privacy request, or contact{" "}
              <a
                href={`mailto:${EXTERNAL_LINKS.email}`}
                className="inline-link"
              >
                {EXTERNAL_LINKS.email}
              </a>
              .
            </p>
          </BlurFade>

          <BlurFade delay={0.06}>
            <h2 className="!text-[22px] mb-3">2. Website information</h2>
            <p>
              The website provides public information and the{" "}
              <Link to="/constitution" className="inline-link">
                Constitution
              </Link>
              . It does not include analytics trackers or information-collection
              forms. Reading the website does not itself create a citizenship
              record with the bot.
            </p>
            <p className="mt-3">
              Website search runs locally in your browser. Hosting and font
              providers receive standard network requests, which can include
              your IP address, browser information, and requested resource, and
              handle them under their own privacy policies.
            </p>
          </BlurFade>

          <BlurFade delay={0.08}>
            <h2 className="!text-[22px] mb-3">3. Discord bot information</h2>
            <p>The bot stores the following records:</p>
            <div className="my-5 overflow-x-auto rounded-lg border border-[var(--line)]">
              <table className="w-full text-left border-collapse text-[15px]">
                <thead>
                  <tr className="bg-[var(--surface-soft)] border-b border-[var(--line)]">
                    <th className="py-3 px-4 font-medium text-[var(--ink)] w-44">
                      Record type
                    </th>
                    <th className="py-3 px-4 font-medium text-[var(--ink)]">
                      Information and purpose
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--line)]">
                  {PRIVACY_RECORDS_TABLE.map((row) => (
                    <tr key={row.type}>
                      <td className="py-3 px-4 font-medium text-[var(--ink)] align-top">
                        {row.type}
                      </td>
                      <td className="py-3 px-4 text-[var(--muted)]">
                        {row.purpose}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              The bot receives information through Discord when people interact
              with its features or when moderation and administrative actions
              are recorded. Do not include passwords, payment details, or
              unnecessary sensitive information in tickets.
            </p>
          </BlurFade>

          <BlurFade delay={0.1}>
            <h2 className="!text-[22px] mb-3">4. Retention</h2>
            <p>
              <strong className="font-medium text-[var(--ink)]">
                Moderation logs, citizenship records, votes, and tickets are
                stored indefinitely. There is no automatic deletion schedule for
                these records.
              </strong>{" "}
              Closing a ticket, leaving the server, or ceasing to use the bot
              does not automatically delete an existing record.
            </p>
            <p className="mt-3">
              Requests for access, correction, deletion, or limits on processing
              can be made through the ticket system. Where applicable law
              requires deletion or other action, that requirement takes
              precedence over routine indefinite retention.
            </p>
          </BlurFade>

          <BlurFade delay={0.12}>
            <h2 className="!text-[22px] mb-3">
              5. Access, handling, and third parties
            </h2>
            <p>
              Bot records are used for the community and administrative purposes
              described above. Do not treat the ticket system as an end-to-end
              encrypted or confidential legal-advice channel. Discord processes
              information under its own{" "}
              <a
                href={EXTERNAL_LINKS.discordPrivacy}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-link"
              >
                Privacy Policy <ArrowUpRight size={13} className="inline" />
              </a>
              .
            </p>
          </BlurFade>

          <BlurFade delay={0.14}>
            <h2 className="!text-[22px] mb-3">6. Your requests &amp; updates</h2>
            <p>
              Open a privacy ticket in the Republic&apos;s Discord ticket system
              to request access, correction, deletion, or information about how
              your records are handled. If you cannot access tickets, reach out
              via our{" "}
              <a
                href={EXTERNAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-link"
              >
                GitHub organization{" "}
                <ArrowUpRight size={13} className="inline" />
              </a>{" "}
              without publishing private information. Related conditions are in
              our{" "}
              <Link to="/terms" className="inline-link">
                Terms of Service
              </Link>
              .
            </p>
          </BlurFade>
        </div>
      </div>
    </div>
  );
}

export function TermsPage() {
  return (
    <div className="pt-28 pb-16 md:pt-34 md:pb-24">
      <div className="portal-container max-w-[720px]">
        <BlurFade inView={false}>
          <span className="eyebrow mb-3">Last updated: November 6, 2026</span>
          <h1>Terms of Service</h1>
        </BlurFade>

        <div className="mt-12 space-y-10 text-[16.5px] leading-[1.68] text-[var(--body)]">
          <BlurFade delay={0.04}>
            <h2 className="!text-[22px] mb-3">1. Services covered</h2>
            <p>
              These terms cover the{" "}
              <strong className="font-medium text-[var(--ink)]">
                Goodfellows Republic website and Goodfellows Republic Discord
                bot
              </strong>
              . By using the services, you agree to these terms to the extent
              permitted by applicable law. Our shared{" "}
              <Link to="/privacy" className="inline-link">
                Privacy Policy
              </Link>{" "}
              explains the information handled by the website and bot.
            </p>
          </BlurFade>

          <BlurFade delay={0.06}>
            <h2 className="!text-[22px] mb-3">
              2. Platform rules and eligibility
            </h2>
            <p>
              Use of Discord features requires compliance with{" "}
              <a
                href={EXTERNAL_LINKS.discordTerms}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-link"
              >
                Discord&apos;s Terms of Service{" "}
                <ArrowUpRight size={13} className="inline" />
              </a>
              , its Community Guidelines, and its applicable age and eligibility
              requirements, alongside applicable law and the Republic&apos;s
              community rules.
            </p>
          </BlurFade>

          <BlurFade delay={0.08}>
            <h2 className="!text-[22px] mb-3">3. Acceptable use</h2>
            <p>
              Use the website, bot, voting features, and ticket system
              responsibly. Do not harass, threaten, discriminate against, or
              impersonate others; submit malicious or misleading tickets;
              manipulate votes or bypass permissions; spam commands or exploit
              vulnerabilities; or submit personal information about others
              without a legitimate administrative reason.
            </p>
          </BlurFade>

          <BlurFade delay={0.1}>
            <h2 className="!text-[22px] mb-3">
              4. The Constitution and community administration
            </h2>
            <p>
              The{" "}
              <Link to="/constitution" className="inline-link">
                Constitution of the Goodfellows Republic
              </Link>{" "}
              describes internal constitutional institutions and procedures.
              Publishing it here does not claim that internal rules override
              applicable real-world law or platform requirements. Reading the
              website or using the bot does not automatically grant citizenship
              or public office.
            </p>
          </BlurFade>

          <BlurFade delay={0.12}>
            <h2 className="!text-[22px] mb-3">
              5. Records, moderation, and availability
            </h2>
            <p>
              The bot retains moderation logs, citizenship records, votes, and
              tickets indefinitely, as detailed in the{" "}
              <Link to="/privacy" className="inline-link">
                Privacy Policy
              </Link>
              . Access to features may be restricted to address misuse or rule
              breaches, subject to review and appeal procedures through the
              Discord ticket system. Services are provided as available.
            </p>
          </BlurFade>

          <BlurFade delay={0.14}>
            <h2 className="!text-[22px] mb-3">
              6. Source code and updates
            </h2>
            <p>
              Website source code is governed by its repository license and does
              not grant permission to impersonate the Republic. Questions may be
              submitted through a ticket in the{" "}
              <a
                href={EXTERNAL_LINKS.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-link"
              >
                Discord community <ArrowUpRight size={13} className="inline" />
              </a>
              .
            </p>
          </BlurFade>
        </div>
      </div>
    </div>
  );
}
