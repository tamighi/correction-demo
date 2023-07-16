import { messageDto, MessageDto } from "./message";

export type ReviewDto = MessageDto & {
  note: number;
};

export const reviewDto: ReviewDto = { ...messageDto, note: 1 };
