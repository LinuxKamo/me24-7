import type { Address } from "../../shared/models/Address.model";

export type Municipality = {
  _id: string;
  name: string;
  address: Address;
};
