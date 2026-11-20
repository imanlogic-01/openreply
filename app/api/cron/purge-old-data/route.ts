import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db/client";

/**
 * Daily retention job: deletes commenter-related records older than
 * RETENTION_DAYS (default 90), so the privacy page's retention promise is true.
 * Campaigns, tracked links and the connected account are kept.
 */
export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET || process.env.NEXTAUTH_SECRET;

  if (authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json(
      { success: false, error: "Unauthorized" },
      { status: 401 }
    );
  }

  const days = Number(process.env.RETENTION_DAYS || 90);
  const cutoff = new Date(Date.now() - days * 24 * 60 * 60 * 1000);

  const [dmLogs, comments, webhooks, clicks, events] = await prisma.$transaction([
    prisma.dmLog.deleteMany({ where: { createdAt: { lt: cutoff } } }),
    prisma.processedComment.deleteMany({ where: { seenAt: { lt: cutoff } } }),
    prisma.webhookEvent.deleteMany({ where: { createdAt: { lt: cutoff } } }),
    prisma.linkClick.deleteMany({ where: { createdAt: { lt: cutoff } } }),
    prisma.operationalEvent.deleteMany({ where: { createdAt: { lt: cutoff } } }),
  ]);

  return NextResponse.json({
    success: true,
    retentionDays: days,
    deleted: {
      dmLogs: dmLogs.count,
      processedComments: comments.count,
      webhookEvents: webhooks.count,
      linkClicks: clicks.count,
      operationalEvents: events.count,
    },
  });
}
