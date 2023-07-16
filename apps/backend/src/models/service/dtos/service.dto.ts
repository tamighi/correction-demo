import { SubServiceDto } from "src/models/subService/dtos/subService.dto";

export class ServiceDto {
  id: number;
  name: string;
  description: string;
  subServices: SubServiceDto[];
}
