import { RegisterForm } from "@/components/register-form";
import Image from "next/image";

export const metadata = {
  title: "Register",
};

export default function RegisterPage() {
  return (
    <section className="flex h-screen flex-col items-center justify-center gap-8 border px-4">
      <div className="w-72">
        <Image
          alt="Cotabox Logo"
          width={1000}
          height={1000}
          src={"/logo-cotabox.png"}
        />
      </div>
      <RegisterForm />
    </section>
  );
}
