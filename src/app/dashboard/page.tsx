import { Dashboard } from "@/components/dashboard";
import { getPartners } from "@/lib/partner/get-partner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function Home() {
  const partners = await getPartners();
  return (
    <main className="min-h-screen w-full bg-zinc-50">
      <Dashboard partners={partners} />
    </main>
  );
}
