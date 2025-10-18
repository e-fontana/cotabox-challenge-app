"use client";
import { TGetPartnersResponse } from "@/lib/partner/types";
import { useAction } from "next-safe-action/hooks";
import Form from "next/form";
import { Dispatch, SetStateAction } from "react";
import { toast } from "sonner";
import { addPartner } from "./actions/add-partner";

export const AddPartnerForm = ({
  setPartnersData,
}: {
  setPartnersData: Dispatch<SetStateAction<TGetPartnersResponse[]>>;
}) => {
  const { execute, isPending } = useAction(addPartner, {
    onSuccess: ({ data }) => {
      console.log(data);
      setPartnersData((prev) => [
        ...prev,
        {
          id: data.id,
          firstName: data.firstName,
          lastName: data.lastName,
          participationPercentage: data.participationPercentage,
        },
      ]);
      toast.success("Partner added successfully");
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.error.serverError || "Failed to add partner");
    },
  });
  return (
    <Form action={execute} className="flex items-center gap-4">
      <input
        id="firstName"
        name="firstName"
        type="text"
        placeholder="Name"
        className="rounded-lg bg-slate-50 px-3 py-4 outline-none"
      />
      <input
        id="lastName"
        name="lastName"
        placeholder="Last Name"
        type="text"
        className="rounded-lg bg-slate-50 px-3 py-4 outline-none"
      />
      <input
        id="participationPercentage"
        name="participationPercentage"
        type="text"
        placeholder="Participation"
        className="rounded-lg bg-slate-50 px-3 py-4 outline-none"
      />
      <button className="bg-cotabox-primary flex min-h-full w-36 cursor-pointer items-center justify-center rounded-lg border-2 px-3 py-4 font-semibold text-white transition-colors duration-300 hover:bg-white/10">
        {isPending ? (
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-t-white border-r-white border-b-transparent border-l-transparent" />
        ) : (
          "SEND"
        )}
      </button>
    </Form>
  );
};
