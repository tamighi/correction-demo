import { Service } from "src/models/service/entities/service.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SubService {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  textType: string;

  @Column("decimal", {
    precision: 5,
    scale: 4,
    transformer: {
      to(value) {
        return value;
      },
      from(value) {
        return parseFloat(value);
      },
    },
  })
  pricePerCharacter: number;

  @ManyToOne(() => Service, (service) => service.subServices, {
    onDelete: "CASCADE",
    nullable: false,
  })
  service: Service;
}
