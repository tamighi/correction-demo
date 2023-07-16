import {
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Res,
  UseGuards,
} from "@nestjs/common";
import { Response } from "express";

import { JwtAdminAuthGuard, JwtAuthGuard } from "src/common";

import { FileService } from "./file.service";

@Controller("file")
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @UseGuards(JwtAuthGuard)
  @Get("/:id")
  async getFile(@Param() param: { id: number }, @Res() res: Response) {
    try {
      const file = await this.fileService.getFile(param.id);
      res.download(`./uploads/${file.storedFilename}`, file.originalFilename);
      return { status: "ok" };
    } catch (err) {
      throw new HttpException("Bad request", HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(JwtAdminAuthGuard)
  @Delete("/:id")
  @HttpCode(204)
  async deleteFile(@Param("id") id: number) {
    this.fileService.deleteFile(id);
  }
}
