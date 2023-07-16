import { Body, HttpException, HttpStatus, Post } from "@nestjs/common";
import { DeepPartial } from "typeorm";

import { AbstractController } from "../core";

import { Message } from "./entities/messages.entity";
import { MessagesService } from "./messages.service";

export class MessagesController<
  T extends Message,
  DTO extends DeepPartial<T>
> extends AbstractController<T, DTO> {
  constructor(private readonly messageService: MessagesService<T, DTO>) {
    super(messageService);
  }

  @Post("postMessage")
  async postMessage(@Body() body: any) {
    try {
      return await this.messageService.postMessage(body);
    } catch (err) {
      throw new HttpException("Bad request", HttpStatus.BAD_REQUEST);
    }
  }
}
