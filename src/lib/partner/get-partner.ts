import { kyUser } from "../kyUser";
import { TGetPartnersResponse } from "./types";

export async function getPartners(): Promise<TGetPartnersResponse[]> {
  const partners = await kyUser("partners").json<TGetPartnersResponse[]>();
  return partners;
}
