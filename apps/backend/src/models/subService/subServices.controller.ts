import { Controller } from "@nestjs/common";
import { AbstractController } from "../core";
import { SubServiceDto } from "./dtos/subService.dto";
import { SubService } from "./entities/subService.entity";
import { SubServicesService } from "./subServices.service";

@Controller("subService")
export class SubServicesController extends AbstractController<
  SubService,
  SubServiceDto
> {
  constructor(private readonly subServicesService: SubServicesService) {
    super(subServicesService);
  }
}
