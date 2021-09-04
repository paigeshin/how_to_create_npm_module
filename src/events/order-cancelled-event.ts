import { Subjects } from "./subjects";

export interface OrderCancelledEvent {
  subject: Subjects.OrderCancelled;
  data: {
    id: string;
    version: number; //to solve concurrent issue
    ticket: {
      id: string;
    };
  };
}
