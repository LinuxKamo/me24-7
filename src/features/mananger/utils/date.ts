export function formatAnnouncementDate(dateStr: string) {
  const now = new Date();
  const date = new Date(dateStr);

  const diffTime = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "1 day ago";
  if (diffDays <= 5) return `${diffDays} days ago`;

  // After 5 days, show full date like "12 November 2026"
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);
}
