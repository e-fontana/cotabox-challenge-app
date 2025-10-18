"use client";
import { PartnerChart } from "@/components/partners-chart";
import { PartnersTable } from "@/components/partners-table";
import { TGetPartnersResponse } from "@/lib/partner/types";
import { Dispatch, SetStateAction } from "react";

export const DashboardContent = ({
  partners,
  setPartnersData,
}: {
  partners: TGetPartnersResponse[];
  setPartnersData: Dispatch<SetStateAction<TGetPartnersResponse[]>>;
}) => {
  return (
    <section className="space-y-16 py-8">
      <div className="flex w-full flex-col items-center justify-center">
        <h1 className="text-2xl font-semibold text-sky-700">CotaPartners</h1>
        <h4 className="text-lg font-medium text-slate-500">
          Seu painel de dados para o controle dos parceiros
        </h4>
      </div>
      <div className="flex w-full items-center justify-center gap-8">
        <PartnersTable partners={partners} setPartners={setPartnersData} />
        <PartnerChart partners={partners} />
      </div>
    </section>
  );
};
