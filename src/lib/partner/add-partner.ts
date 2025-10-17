import { TGetPartnersResponse } from "./types";

export async function getPartners(): Promise<TGetPartnersResponse[]> {
  const defaultPartners: TGetPartnersResponse[] = [
    {
      id: "ceb3a726-052b-46ff-822a-ee55edaa5f6e",
      firstName: "John",
      lastName: "Doe",
      participation: 50,
    },
    {
      id: "bf1fa0dd-a5f3-4898-aa4d-0117d6f623fc",
      firstName: "Jane",
      lastName: "Smith",
      participation: 20,
    },
    {
      id: "ee17087d-a5dc-4c77-afe1-b41dd0ea0713",
      firstName: "Jane",
      lastName: "Doe",
      participation: 30,
    }
  ];

  return defaultPartners;
}
