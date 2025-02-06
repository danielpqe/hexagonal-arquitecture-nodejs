import "reflect-metadata";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToMany,
  ManyToOne,
} from "typeorm";

@Entity({ name: "driver" })
export class DriverEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: "varchar", length: 50 })
  name?: string;

  @Column({ type: "varchar", length: 50 })
  lastname?: string;

  @Column({ type: "varchar", length: 50 })
  licenseDriver?: string;

  @Column({ type: "boolean", default: true })
  active?: boolean;
}
