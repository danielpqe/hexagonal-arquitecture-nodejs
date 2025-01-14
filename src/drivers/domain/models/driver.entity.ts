import "reflect-metadata";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToMany,
  ManyToOne,
} from "typeorm";

@Entity({ name: "drivers" })
export class DriverEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 100 })
  name!: string;

  @Column({ type: "varchar", length: 100 })
  lastname!: string;

  @Column({ type: "text" })
  license!: string;

  @Column({ type: "boolean", default: true })
  active!: boolean;
}
