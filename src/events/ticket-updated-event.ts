import { Subjects } from "./subjects";

export interface TicketUpdatedEvent {
  subject: Subjects.TicketUpdated;
  data: {
    id: string;
    version: number; //to solve concurrent issue
    title: string;
    price: number;
    userId: string;
    orderId?: string;
  };
}
