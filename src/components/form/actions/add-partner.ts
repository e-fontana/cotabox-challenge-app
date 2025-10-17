"use server";

import { actionClient } from "@/lib/safe-actions";
import { addPartnerSchema, TAddPartnerFormData } from "./dto/create-partner";

export const addPartner = actionClient
  .inputSchema(addPartnerSchema)
  .action(async ({ parsedInput }: { parsedInput: TAddPartnerFormData }) => {
    console.log(parsedInput);
  });
