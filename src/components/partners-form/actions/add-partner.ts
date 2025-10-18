"use server";

import { kyUser } from "@/lib/kyUser";
import { TGetPartnersResponse } from "@/lib/partner/types";
import { actionClient } from "@/lib/safe-actions";
import { addPartnerSchema, TAddPartnerFormData } from "./dto/create-partner";

export const addPartner = actionClient
  .inputSchema(addPartnerSchema)
  .action(async ({ parsedInput }: { parsedInput: TAddPartnerFormData }) => {
    const response = await kyUser.post<TGetPartnersResponse>("partners", {
      json: parsedInput,
    });

    return response.json();
  });
