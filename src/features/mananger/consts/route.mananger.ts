export const MANANGER_DASHBOARD = "/mananger";
export const MANANGER_USERS = "/mananger/users";
export const MANANGER_DRIVERS = "/mananger/drivers";
export const MANANGER_ANNOUNCEMENTS = "/mananger/announcements";
export const MANANGER_TRIPTRACKING = "/mananger/trip-tracking";
export const MANANGER_AREAS = "/mananger/areas";
export const MANANGER_ANALYTICS = "/mananger/analytics";
export const MANANGER_PROFILE = "/mananger/profile";
export const MANANGER_DRIVER_PROFILE = "/mananger/drivers/:_id";
export const MANANGER_DRIVER_PROFILE_DETAIL = (_id: string) =>
  `/mananger/drivers/${_id}`;
export const MANANGER_CREATE_ANNOUNCEMENT = "/mananger/make-announcement";
export const MANANGER_NOTIFICATIONS = "/mananger/notifications";
