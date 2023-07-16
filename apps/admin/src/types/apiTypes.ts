import { TypeGuardRegister } from "../services/utils";
import { devisDto } from "./devis";
import { questionDto } from "./question";
import { reviewDto } from "./review";
import { serviceDto, subServiceDto } from "./service";

type Types = {
  service: typeof serviceDto;
  subService: typeof subServiceDto;
  question: typeof questionDto;
  review: typeof reviewDto;
  devis: typeof devisDto;
};

export type ResourceString = keyof Types;

export type ResourceType<R extends ResourceString> = Types[R];

// TODO: Type guard type should be cleaner. Or use zod(z.object)
export const typeRegister: TypeGuardRegister = {
  review: reviewDto,
  devis: devisDto,
  service: { instance: serviceDto, subServices: [subServiceDto] },
  question: questionDto,
  subService: subServiceDto,
};
