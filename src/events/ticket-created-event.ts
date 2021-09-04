import { Subjects } from "./subjects";

export interface TicketCreatedEvent {
  subject: Subjects.TicketCreated;
  data: {
    id: string;
    version: number; //to solve concurrent issue
    title: string;
    price: number;
    userId: string;
  };
}
