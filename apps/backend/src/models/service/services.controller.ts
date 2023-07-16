import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from "@nestjs/common";

import { AbstractController } from "../core";

import { ServiceDto } from "./dtos/service.dto";
import { Service } from "./entities/service.entity";
import { ServicesService } from "./services.service";

@Controller("service")
export class ServicesController extends AbstractController<
  Service,
  ServiceDto
> {
  constructor(private readonly servicesService: ServicesService) {
    super(servicesService);
  }

  @Get("fetchServices")
  async fetchServices() {
    try {
      return await this.servicesService.fetchServices();
    } catch (err) {
      throw new HttpException("Bad request", HttpStatus.BAD_REQUEST);
    }
  }

  @Get("fetchServices/:id")
  async fetchOneService(@Param() id: { id: number }) {
    try {
      return await this.servicesService.fetchOneService(id);
    } catch (err) {
      throw new HttpException("Bad request", HttpStatus.BAD_REQUEST);
    }
  }
}
