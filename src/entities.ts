import { Column, Entity, PrimaryGeneratedColumn } from "../deps.ts";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  createdAt!: Date;
}
