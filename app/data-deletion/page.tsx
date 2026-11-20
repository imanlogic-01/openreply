import type { Metadata } from "next";
import LegalShell from "@/components/legal-shell";

const CONTACT = "contact@thejamalcampbell.com";

export const metadata: Metadata = {
  title: "Data Deletion - OpenReply",
  description:
    "How to have your data deleted from this OpenReply instance, run by Jamal Campbell for his own Instagram account.",
};

export default function DataDeletionPage() {
  return (
    <LegalShell
      title="Data Deletion"
      description="How to have your data deleted from this OpenReply instance, run by Jamal Campbell for his own Instagram account."
      updatedAt="November 19, 2026"
    >
      <section>
        <h2 className="text-xl font-bold text-white">If you commented on a post</h2>
        <p className="mt-3">
          Email <a className="underline" href={`mailto:${CONTACT}`}>{CONTACT}</a>{" "}
          with your Instagram username and ask for your data to be deleted. We
          delete your comment records and reply logs within 30 days and confirm
          by email. If you don&apos;t ask, they are deleted automatically after
          90 days.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white">Removing this app from your Instagram</h2>
        <p className="mt-3">
          This app is only connected to Jamal Campbell&apos;s own Instagram
          account. If you are the account owner, sign in, open Settings and
          select Disconnect: that removes the stored connection token and stops
          all replies.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white">Checking it&apos;s you</h2>
        <p className="mt-3">
          We may ask you to confirm the request from the Instagram account
          concerned, so nobody can delete someone else&apos;s data.
        </p>
      </section>
    </LegalShell>
  );
}
