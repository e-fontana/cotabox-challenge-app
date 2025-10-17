import { Ellipsis, Trash } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";

export const PartnerDropdown = ({ partnerId }: { partnerId: string }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer rounded-full p-1 transition-colors duration-300 outline-none hover:bg-zinc-200">
        <Ellipsis strokeWidth={1.5} className="text-zinc-600" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className="flex cursor-pointer items-center justify-center gap-2 transition-colors duration-300 hover:bg-zinc-50 hover:text-red-500 focus:text-red-500">
          <Trash strokeWidth={1.5} className="hover:text-red-500" />
          <span>Remover</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
