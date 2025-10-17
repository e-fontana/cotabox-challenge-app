import { TGetPartnersResponse } from "@/lib/partner/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { PartnerDropdown } from "./dropdown";

export const PartnersTable = ({
  partners,
}: {
  partners: TGetPartnersResponse[];
}) => {
  return (
    <div className="w-full max-w-1/3">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">First Name</TableHead>
            <TableHead className="text-center">Last Name</TableHead>
            <TableHead className="text-center">Participation</TableHead>
            <TableHead className="text-center"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {partners.map((partner) => (
            <TableRow key={partner.id} className="hover:bg-muted">
              <TableCell className="text-center">{partner.firstName}</TableCell>
              <TableCell className="text-center">{partner.lastName}</TableCell>
              <TableCell className="text-center">
                {partner.participation.toFixed(2)}%
              </TableCell>
              <TableCell className="text-center">
                <PartnerDropdown partnerId={partner.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
