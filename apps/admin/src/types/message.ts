export interface MessageDto {
  id: number;
  message: string;
  status: "pending" | "accepted" | "refused";
  date: string;
  name?: string;
  email?: string;
}

export const messageDto: MessageDto = {
  id: 1,
  message: "",
  status: "pending",
  date: new Date().toLocaleDateString(),
} as const;
