import type { Metadata } from "next";
import LegalShell from "@/components/legal-shell";

const CONTACT = "contact@thejamalcampbell.com";

export const metadata: Metadata = {
  title: "Privacy Policy - OpenReply",
  description:
    "How this OpenReply instance, run by Jamal Campbell for his own Instagram account, handles the data of people who comment.",
};

export default function PrivacyPage() {
  return (
    <LegalShell
      title="Privacy Policy"
      description="This OpenReply instance is run by Jamal Campbell (UK) for his own Instagram account. It sends a private reply when someone comments a keyword on one of his posts or reels."
      updatedAt="November 19, 2026"
    >
      <section>
        <h2 className="text-xl font-bold text-white">Who is responsible</h2>
        <p className="mt-3">
          Jamal Campbell is responsible for the personal data handled here. It
          is used only for Jamal Campbell&apos;s own Instagram account. Contact:{" "}
          <a className="underline" href={`mailto:${CONTACT}`}>{CONTACT}</a>.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white">What we collect about people who comment</h2>
        <p className="mt-3">
          When you comment a keyword on one of the posts or reels, we store
          your Instagram user ID, your username, the comment, the keyword it
          matched, and a log of the private reply we sent (when, and whether it
          was delivered). If you tap a link in that reply, we record the click
          against an anonymised identifier, with no IP address stored in plain
          form. We do not ask for passwords, scrape Instagram or use browser
          automation.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white">Why, and on what basis</h2>
        <p className="mt-3">
          We use this data only to send you what you asked for by commenting
          the keyword, to avoid sending it twice, and to see whether the
          messages arrive. The legal basis is legitimate interests: replying to
          a request you made publicly. We do not add you to a mailing list or a
          CRM, and we do not sell or share your data. You only hear from us
          again if you reply.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white">How long we keep it</h2>
        <p className="mt-3">
          Comment records, reply logs, link clicks, webhook data and
          diagnostics are deleted automatically after 90 days.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white">Who processes it for us</h2>
        <p className="mt-3">
          Meta (Instagram) delivers the comments and messages. The service runs
          on Vercel (web app) and Railway (database, queue and worker), and
          sign-in emails for the account owner are sent by Resend. These
          providers process data only to run the service.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white">Your rights</h2>
        <p className="mt-3">
          You can ask for a copy of the data we hold about you, ask us to
          delete it, or object to us processing it, by emailing{" "}
          <a className="underline" href={`mailto:${CONTACT}`}>{CONTACT}</a> with
          your Instagram username. You can also complain to the UK Information
          Commissioner&apos;s Office (ico.org.uk).
        </p>
      </section>
    </LegalShell>
  );
}
