import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  identifier: string;

  @Column()
  password: string;

  @Column()
  status: "admin" | "user";

  @Column({ nullable: true })
  lastModified: Date;
}
