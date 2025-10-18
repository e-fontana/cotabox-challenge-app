"use client";
import { deletePartner } from "@/components/partners-form/actions/delete-partner";
import { TGetPartnersResponse } from "@/lib/partner/types";
import { Ellipsis, Trash } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import { Dispatch, SetStateAction } from "react";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";

export const PartnerDropdown = ({
  partnerId,
  setPartners,
}: {
  partnerId: string;
  setPartners: Dispatch<SetStateAction<TGetPartnersResponse[]>>;
}) => {
  const { execute } = useAction(deletePartner, {
    onSuccess: () => {
      toast.success("Partner removed successfully");
      setPartners((prev) => prev.filter((p) => p.id !== partnerId));
    },
    onError: (error) => {
      toast.error(error.error.serverError || "Failed to remove partner");
    },
  });

  const handlePartnerDelete = () => {
    execute({ partnerId });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer rounded-full p-1 transition-colors duration-300 outline-none hover:bg-zinc-200">
        <Ellipsis strokeWidth={1.5} className="text-zinc-600" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          onClick={handlePartnerDelete}
          className="flex cursor-pointer items-center justify-center gap-2 transition-colors duration-300 hover:bg-zinc-50 hover:text-red-500 focus:text-red-500"
        >
          <Trash strokeWidth={1.5} className="hover:text-red-500" />
          <span>Remover</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
