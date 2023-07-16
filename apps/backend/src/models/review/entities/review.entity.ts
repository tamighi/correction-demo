import { Message } from "src/models/message/entities/messages.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class Review extends Message {
  @Column()
  note: number;
}
