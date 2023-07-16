import { DeepPartial, Repository } from "typeorm";

import { AbstractService } from "../core";

import { Message } from "./entities/messages.entity";

export class MessagesService<
  T extends Message,
  DTO extends DeepPartial<T>
> extends AbstractService<T, DTO> {
  protected messageRepository: Repository<T>;

  constructor(messageRepository: Repository<T>) {
    super(messageRepository);
    this.messageRepository = messageRepository;
  }

  entityToDto(message: T): DTO {
    const messageDto: DTO = {} as DTO;

    messageDto.id = message.id;
    messageDto.message = message.message;
    messageDto.name = message.name;
    messageDto.email = message.email;
    messageDto.status = message.status;
    messageDto.date = message.date;

    return messageDto;
  }

  async postMessage(message: DTO) {
    return super.create(message);
  }
}
