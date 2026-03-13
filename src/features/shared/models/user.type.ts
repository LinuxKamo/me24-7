export type User = {
   name: string;
  surname: string;
  email: string;
  role:  "Admin" | "media" | "driver" | "forman" | "normal user"
}