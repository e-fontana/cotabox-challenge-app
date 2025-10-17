"use server";

import { TAddPartnerFormData } from "./dto/create-partner";

export async function addPartner(data: TAddPartnerFormData) {
  console.log(data);
}
