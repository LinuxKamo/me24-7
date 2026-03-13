export interface MenuItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  url: string;
}