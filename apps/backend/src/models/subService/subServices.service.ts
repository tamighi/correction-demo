import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { AbstractService } from "../core";

import { SubServiceDto } from "./dtos/subService.dto";
import { SubService } from "./entities/subService.entity";

@Injectable()
export class SubServicesService extends AbstractService<
  SubService,
  SubServiceDto
> {
  constructor(
    @InjectRepository(SubService)
    protected readonly subServiceRepository: Repository<SubService>
  ) {
    super(subServiceRepository);
  }

  entityToDto(subService: SubService): SubServiceDto {
    const subServiceDto: SubServiceDto = new SubServiceDto();

    subServiceDto.id = subService.id;
    subServiceDto.textType = subService.textType;
    subServiceDto.pricePerCharacter = subService.pricePerCharacter;

    return subServiceDto;
  }
}
