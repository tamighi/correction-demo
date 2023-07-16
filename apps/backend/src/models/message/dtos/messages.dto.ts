export enum Status {
    PENDING = "pending",
    ACCEPTED = "accepted",
    REFUSED = "refused"
}

export class MessageDto {
  id: number;
  message: string;
  name?: string;
  email: string;
  status: Status;
  date: Date;
}
