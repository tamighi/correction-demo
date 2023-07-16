import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FindOptionsWhere, Repository } from "typeorm";

import { AbstractService } from "../core";

import { ServiceDto } from "./dtos/service.dto";
import { Service } from "./entities/service.entity";

@Injectable()
export class ServicesService extends AbstractService<Service, ServiceDto> {
  constructor(
    @InjectRepository(Service)
    protected readonly serviceRepository: Repository<Service>
  ) {
    super(serviceRepository, { relations: ["subServices"] });
  }

  entityToDto(service: Service): ServiceDto {
    const serviceDto: ServiceDto = new ServiceDto();

    serviceDto.id = service.id;
    serviceDto.name = service.name;
    serviceDto.description = service.description;
    serviceDto.subServices = service.subServices;

    return serviceDto;
  }

  async fetchServices() {
    const data = this.serviceRepository.find({ relations: ["subServices"] });
    return data;
  }

  async fetchOneService(id: { id: number }) {
    const data = this.serviceRepository.findOne({
      where: id as FindOptionsWhere<Service>,
      relations: ["subServices"],
    });
    return data;
  }
}
