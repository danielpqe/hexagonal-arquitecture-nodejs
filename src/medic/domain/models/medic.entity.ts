import "reflect-metadata";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToMany,
  ManyToOne,
} from "typeorm";

@Entity({ name: "medic" })
export class MedicEntity {
  constructor(
    id: number,
    name: string,
    lastname: string,
    cmp: string,
    active: boolean
  ) {
    this.id = id;
    this.name = name;
    this.lastname = lastname;
    this.cmp = cmp;
    this.active = active;
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 50 })
  name: string;

  @Column({ type: "varchar", length: 50 })
  lastname: string;

  @Column({ type: "varchar", length: 5 })
  cmp: string;

  @Column({ type: "boolean" })
  active: boolean;
}
