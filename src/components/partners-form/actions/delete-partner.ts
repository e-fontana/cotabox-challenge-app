"use server";

import { kyUser } from "@/lib/kyUser";
import { actionClient } from "@/lib/safe-actions";
import {
  deletePartnerSchema,
  TDeletePartnerParams,
} from "./dto/delete-partner";

export const deletePartner = actionClient
  .inputSchema(deletePartnerSchema)
  .action(async ({ parsedInput }: { parsedInput: TDeletePartnerParams }) => {
    const request = await kyUser.delete(`partners/${parsedInput.partnerId}`);

    if (!request.ok) throw new Error("Failed to delete partner");

    return parsedInput.partnerId;
  });
