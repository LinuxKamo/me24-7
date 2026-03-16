export const MANANGER_DASHBOARD = "/manager";
export const MANANGER_USERS = "/manager/users";
export const MANANGER_DRIVERS = "/manager/drivers";
export const MANANGER_ANNOUNCEMENTS = "/manager/announcements";
export const MANANGER_TRIPTRACKING = "/manager/trip-tracking";
export const MANANGER_AREAS = "/manager/areas";
export const MANANGER_ANALYTICS = "/manager/analytics";
export const MANANGER_PROFILE = "/manager/profile";
export const MANANGER_DRIVER_PROFILE = "/manager/drivers/:_id";
export const MANANGER_DRIVER_PROFILE_DETAIL = (_id: string) =>
  `/manager/drivers/${_id}`;
export const MANANGER_CREATE_ANNOUNCEMENT = "/manager/make-announcement";
export const MANANGER_NOTIFICATIONS = "/manager/notifications";
