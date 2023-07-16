export interface SubServiceDto {
  id: number;
  textType: string;
  pricePerCharacter: number;
}

export interface ServiceDto {
  id: number | string;
  name: string;
  description: string;
  subServices?: SubServiceDto[];
}
