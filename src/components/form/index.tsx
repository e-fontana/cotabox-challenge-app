"use client";
import { useAction } from "next-safe-action/hooks";
import Form from "next/form";
import { addPartner } from "./actions/add-partner";

export const AddPartnerForm = () => {
  const { execute } = useAction(addPartner, {});
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
        id="participation"
        name="participation"
        type="text"
        placeholder="Participation"
        className="rounded-lg bg-slate-50 px-3 py-4 outline-none"
      />
      <button className="bg-cotabox-primary flex w-36 cursor-pointer items-center justify-center rounded-lg border-2 px-3 py-4 font-semibold text-white transition-colors duration-300 hover:bg-white/10">
        SEND
      </button>
    </Form>
  );
};
