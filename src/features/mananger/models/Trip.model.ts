import type { Section } from "./Section.model";

export type Trip = {
  _id: number;
  driver_name: string;
  area_name: string;
  status: "completed" | "on_site" | "pending";
  updatedAt: string;
  sections : Section[]
};