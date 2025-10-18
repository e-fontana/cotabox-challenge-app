"use client";
import { TGetPartnersResponse } from "@/lib/partner/types";
import { useState } from "react";
import { AddPartnerForm } from "../partners-form";
import { DashboardContent } from "./content";

export const Dashboard = ({
  partners,
}: {
  partners: TGetPartnersResponse[];
}) => {
  const [partnersData, setPartnersData] =
    useState<TGetPartnersResponse[]>(partners);
  return (
    <>
      <header className="bg-cotabox-primary flex items-center justify-center gap-4 py-11">
        <AddPartnerForm setPartnersData={setPartnersData} />
      </header>
      <DashboardContent partners={partnersData} setPartnersData={setPartnersData} />
    </>
  );
};
