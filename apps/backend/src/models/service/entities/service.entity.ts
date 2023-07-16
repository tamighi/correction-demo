import { SubService } from "src/models/subService/entities/subService.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Service {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(() => SubService, (subService) => subService.service)
  subServices: SubService[];
}
