import {
  Body,
  Controller,
  Delete,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";

import { FileService } from "../core";
import { JwtAuthGuard } from "src/common";

import { DevisDto } from "./dtos/devis.dto";
import { Devis } from "./entities/devis.entity";
import { DevisService } from "./devis.service";
import { MessagesController } from "../message/messages.controller";

@Controller("devis")
export class DevisController extends MessagesController<Devis, DevisDto> {
  constructor(
    private readonly devisService: DevisService,
    private readonly fileService: FileService
  ) {
    super(devisService);
  }

  @Post("postFile")
  @UseInterceptors(FileInterceptor("file"))
  async postMessageWithFile(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: any
  ) {
    let storedFile = undefined;

    if (file instanceof Error) {
      throw new HttpException(file.message, HttpStatus.BAD_REQUEST);
    }
    if (file) {
      storedFile = await this.fileService.storeFilename(file);
    }
    try {
      const devis = JSON.parse(body.devis);
      devis.file = storedFile;
      return await this.devisService.postMessage(devis);
    } catch (err) {
      if (storedFile) {
        this.fileService.deleteFile(storedFile.id);
      }
      throw new HttpException("Bad request", HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Delete("/:id")
  @HttpCode(204)
  async deleteOne(@Param() id: { id: number }) {
    const devis = await this.devisService.getOneById(id);
    if (devis.data.file) {
      this.fileService.deleteFile(devis.data.file.id);
    }
    super.deleteOne(id);
  }
}
