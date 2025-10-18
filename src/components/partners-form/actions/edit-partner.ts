"use server";

import { kyUser } from "@/lib/kyUser";
import { actionClient } from "@/lib/safe-actions";
import { editPartnerSchema, TEditPartnerData } from "./dto/edit-partner";

export const editPartner = actionClient
  .inputSchema(editPartnerSchema)
  .action(async ({ parsedInput }: { parsedInput: TEditPartnerData }) => {
    const respose = await kyUser.patch(`partners/${parsedInput.id}`, {
      json: parsedInput,
    });

    return respose.json();
  });
