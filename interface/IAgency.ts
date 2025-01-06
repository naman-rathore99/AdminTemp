export interface IAgency {
  id: string;
  name: string;
  avatar: string;
  description?: string;
  username?: string;
  location?: string;
  established?: Date;
  numbersOfCreator: number;
  coinBalance: number;
  invoicesPdfLink: string;
  status: string;
  createdAt?: Date;
  updatedAt?: Date;
  listOfCreators?: {
    id: string;
    name: string;
    email: string;
  }[];
}
