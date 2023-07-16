import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class InvalidatedAuthToken {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  token: string;

  @Column()
  expires: Date;
}
