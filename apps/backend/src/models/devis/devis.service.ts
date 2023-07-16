import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { MessagesService } from "../message/messages.service";
import { DevisDto } from "./dtos/devis.dto";
import { Devis } from "./entities/devis.entity";

@Injectable()
export class DevisService extends MessagesService<Devis, DevisDto> {
  constructor(
    @InjectRepository(Devis)
    protected readonly devisRepository: Repository<Devis>
  ) {
    super(devisRepository);
  }

  override entityToDto(devis: Devis): DevisDto {
    const devisDto: DevisDto = super.entityToDto(devis);

    devisDto.service = devis.service;
    devisDto.subService = devis.subService;
    devisDto.endDate = devis.endDate;
    devisDto.file = devis.file;

    return devisDto;
  }

  override async postMessage(body: DevisDto): Promise<{ data: DevisDto }> {
    const service = body.service?.id ? body.service : undefined;
    const subService = body.subService?.id ? body.subService : undefined;
    const endDate = body.endDate ? new Date(body.endDate) : undefined;

    const correctBody = {
      ...body,
      service,
      subService,
      endDate,
    };

    return super.postMessage(correctBody);
  }
}
