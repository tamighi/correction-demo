import { MessageDto } from "types";

export interface DevisDto extends MessageDto {
  service?: {
    id: number;
  };
  subService?: {
    id: number;
  };
  endDate: number;
  file: File;
}
