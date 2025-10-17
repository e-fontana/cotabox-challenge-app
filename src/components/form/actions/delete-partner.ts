"use server";

import { actionClient } from "@/lib/safe-actions";
import {
  deletePartnerSchema,
  TDeletePartnerParams,
} from "./dto/delete-partner";

export const deletePartner = actionClient
  .inputSchema(deletePartnerSchema)
  .action(async ({ parsedInput }: { parsedInput: TDeletePartnerParams }) => {
    console.log(parsedInput);
  });
