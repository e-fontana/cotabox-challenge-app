"use server";

import { actionClient } from "@/lib/safe-actions";
import { editPartnerSchema, TEditPartnerData } from "./dto/edit-partner";

export const editPartner = actionClient
  .inputSchema(editPartnerSchema)
  .action(async ({ parsedInput }: { parsedInput: TEditPartnerData }) => {
    console.log(parsedInput);
  });
