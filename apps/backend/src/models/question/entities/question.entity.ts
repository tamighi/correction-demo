import { Message } from "src/models/message/entities/messages.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class Question extends Message {
  @Column()
  pending: boolean = true;
}
