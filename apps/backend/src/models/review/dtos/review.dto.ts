import {
  MessageDto,
} from "src/models/message/dtos/messages.dto";

export class ReviewDto extends MessageDto {
  note: number;
}
