import { File } from "../../core";

import { MessageDto } from "src/models/message/dtos/messages.dto";
import { ServiceDto } from "src/models/service/dtos/service.dto";
import { SubServiceDto } from "src/models/subService/dtos/subService.dto";

export class DevisDto extends MessageDto {
  file?: File;
  endDate?: Date;
  subService?: SubServiceDto;
  service?: ServiceDto;
}
