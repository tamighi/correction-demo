import {
  Body,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from "@nestjs/common";
import { DeepPartial } from "typeorm";

import { JwtAdminAuthGuard, JwtAuthGuard } from "src/common";

import { AbstractService } from "./abstract.service";
import { QueryDto } from "./dtos/query.dto";

export abstract class AbstractController<
  T extends { id: number },
  DTO extends DeepPartial<T>
> {
  constructor(protected readonly abstractService: AbstractService<T, DTO>) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getList(
    @Query() query: QueryDto
  ): Promise<{ data: DTO[]; count: number }> {
    try {
      return await this.abstractService.getList(query);
    } catch (err) {
      throw new HttpException("Bad request", HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get("/:id")
  async getOneById(@Param() id: { id: number }): Promise<{ data: DTO }> {
    try {
      return await this.abstractService.getOneById(id);
    } catch (err) {
      throw new HttpException("Bad request", HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(JwtAdminAuthGuard)
  @Put("/:id")
  async updateOne(
    @Param() id: { id: number },
    @Body() body: DTO
  ): Promise<{ data: DTO }> {
    try {
      return await this.abstractService.updateOne(id, body);
    } catch (err) {
      throw new HttpException("Bad request", HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(JwtAdminAuthGuard)
  @Put()
  async updateMany(
    @Body() body: DTO[],
    @Query() query: QueryDto
  ): Promise<{ data: DTO[] }> {
    try {
      return await this.abstractService.updateMany(body, query);
    } catch (err) {
      throw new HttpException("Bad request", HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(JwtAdminAuthGuard)
  @Post()
  async create(@Body() body: DTO): Promise<{ data: DTO }> {
    try {
      return await this.abstractService.create(body);
    } catch (err) {
      throw new HttpException("Bad request", HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(JwtAdminAuthGuard)
  @Delete("/:id")
  @HttpCode(204)
  async deleteOne(@Param() id: { id: number }) {
    try {
      await this.abstractService.deleteOne(id);
    } catch (err) {
      throw new HttpException("Bad request", HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(JwtAdminAuthGuard)
  @Delete()
  @HttpCode(204)
  async deleteMany(@Query() query: QueryDto) {
    try {
      await this.abstractService.deleteMany(query);
    } catch (err) {
      throw new HttpException("Bad request", HttpStatus.BAD_REQUEST);
    }
  }
}
