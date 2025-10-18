"use client";
import { useAction } from "next-safe-action/hooks";
import Form from "next/form";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { registerUser } from "../login-form/actions/register";
import Link from "next/link";

export const RegisterForm = () => {
  const router = useRouter();

  const { execute, isPending } = useAction(registerUser, {
    onSuccess: (data) => {
      console.log(data);
      toast.success("Usuário registrado com sucesso!");
      router.push("/login");
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.error.serverError || "Erro ao registrar usuário");
    },
  });

  return (
    <Form action={execute} className="flex w-full max-w-96 flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="font-medium text-zinc-800">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          className="w-full rounded-lg border px-3 py-3 outline-none"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="username" className="font-medium text-zinc-800">
          Username
        </label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          className="w-full rounded-lg border px-3 py-3 outline-none"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="font-medium text-zinc-800">
          Password
        </label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          className="w-full rounded-lg border px-3 py-3 outline-none"
        />
      </div>
      <button
        type="submit"
        className="bg-cotabox-primary flex w-full cursor-pointer items-center justify-center rounded-lg py-3 font-semibold text-white transition-colors duration-300 hover:bg-sky-700"
      >
        {isPending ? (
          <div>
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-t-white border-r-white border-b-transparent border-l-transparent" />
          </div>
        ) : (
          "Registrar"
        )}
      </button>
      <Link href="/login" className="text-center text-sm text-zinc-600">
        Já tem uma conta? Faça login agora!
      </Link>
    </Form>
  );
};
