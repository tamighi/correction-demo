import { messageDto, MessageDto } from "./message";

export type QuestionDto = MessageDto;

export const questionDto: QuestionDto = { ...messageDto };
