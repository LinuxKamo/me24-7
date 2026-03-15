import { useState } from "react";
import { Loader2, MessageCircle, Bell, RefreshCw } from "lucide-react";
import moment from "moment";

export default function Notifications() {
  const [loading] = useState(false);

  const announcements = [
    {
      id: "1",
      message: "Water supply will be interrupted tomorrow for maintenance.",
    },
    {
      id: "2",
      message: "Road repairs scheduled in the central district this week.",
    },
  ];

  const comments = [
    {
      id: "1",
      author_name: "John Doe",
      author_email: "john@example.com",
      message: "Thanks for letting us know!",
      created_date: "2026-03-14T10:30:00",
      announcement_id: "1",
    },
    {
      id: "2",
      author_name: "Sarah Williams",
      author_email: "sarah@example.com",
      message: "Will this affect the whole area?",
      created_date: "2026-03-14T12:10:00",
      announcement_id: "1",
    },
    {
      id: "3",
      author_name: "David Johnson",
      author_email: "david@example.com",
      message: "Looking forward to better roads.",
      created_date: "2026-03-13T15:20:00",
      announcement_id: "2",
    },
  ];

  const announcementMap = Object.fromEntries(
    announcements.map((a) => [a.id, a]),
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-6 w-6 animate-spin text-[#0f4c81]" />
      </div>
    );
  }

  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            Notifications
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            User comments on announcements
          </p>
        </div>

        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-600 hover:bg-slate-50 transition-colors">
          <RefreshCw className="h-3.5 w-3.5" />
          Refresh
        </button>
      </div>

      {/* Empty State */}
      {comments.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200/90 p-12 text-center">
          <Bell className="h-10 w-10 text-slate-200 mx-auto mb-3" />
          <p className="text-slate-400 text-sm">No comments yet</p>
        </div>
      ) : (
        <div className="space-y-3">
          {comments.map((c) => {
            const ann = announcementMap[c.announcement_id];

            return (
              <div
                key={c.id}
                className="bg-white rounded-2xl border border-slate-200/60 p-4 flex gap-3 hover:shadow-sm transition-shadow"
              >
                {/* Avatar */}
                <div className="h-9 w-9 rounded-full bg-linear-to-br from-slate-200 to-slate-300 flex items-center justify-center text-xs font-bold text-slate-600 shrink-0">
                  {c.author_name?.[0] || "U"}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-semibold text-sm text-slate-900">
                      {c.author_name}
                    </span>

                    {c.author_email && (
                      <span className="text-[11px] text-slate-400">
                        {c.author_email}
                      </span>
                    )}

                    <span className="ml-auto text-[11px] text-slate-400">
                      {moment(c.created_date).fromNow()}
                    </span>
                  </div>

                  <p className="text-sm text-slate-700 mt-1">{c.message}</p>

                  {ann && (
                    <div className="mt-2 flex items-start gap-1.5 bg-slate-50 rounded-lg px-3 py-2">
                      <MessageCircle className="h-3.5 w-3.5 text-slate-400 shrink-0 mt-0.5" />
                      <p className="text-[11px] text-slate-500 line-clamp-2">
                        <span className="font-medium text-slate-600">On:</span>{" "}
                        {ann.message}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
