import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";

import { File } from "../../core";

import { Message } from "src/models/message/entities/messages.entity";
import { Service } from "src/models/service/entities/service.entity";
import { SubService } from "src/models/subService/entities/subService.entity";

@Entity()
export class Devis extends Message {
  @Column({ nullable: true })
  endDate?: Date;

  @OneToOne(() => File, { nullable: true, eager: true, onDelete: "SET NULL" })
  @JoinColumn()
  file?: File;

  @ManyToOne(() => Service, {
    onDelete: "SET NULL",
    eager: true,
    nullable: true,
  })
  service?: Service;

  @ManyToOne(() => SubService, {
    onDelete: "SET NULL",
    eager: true,
    nullable: true,
  })
  subService?: SubService;
}
