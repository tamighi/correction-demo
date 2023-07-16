import { Transform } from "class-transformer";
import { IsArray, IsObject, IsOptional } from "class-validator";
import {
  parseRange,
  parseSort,
  parseFilter,
} from "../helper";

export class QueryDto {
  @Transform(({ value }) => parseFilter(value))
  @IsObject()
  @IsOptional()
  filter?: Record<string, unknown>

  @Transform(({ value }) => parseSort(value))
  @IsObject()
  @IsOptional()
  sort?: object;

  @Transform(({ value }) => parseRange(value))
  @IsArray()
  @IsOptional()
  range?: number[];
}
