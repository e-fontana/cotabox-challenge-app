import { DashboardContent } from "@/components/dashboard/content";
import { AddPartnerForm } from "@/components/form";
import { getPartners } from "@/lib/partner/add-partner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function Home() {
  const partners = await getPartners();
  return (
    <main className="min-h-screen w-full bg-zinc-50">
      <header className="bg-cotabox-primary flex items-center justify-center gap-4 py-11">
        <AddPartnerForm />
      </header>
      <DashboardContent partners={partners} />
    </main>
  );
}
