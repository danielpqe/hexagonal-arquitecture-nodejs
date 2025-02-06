import "reflect-metadata";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToMany,
  ManyToOne,
} from "typeorm";

@Entity({ name: "history" })
export class HistoryEntity {
  constructor(
    id: number,
    name: string,
    lastname: string,
    age: number,
    active: boolean,
    gender: string,
    phone: string,
    address: string,
    sympthons: string,
    observations: string,
    treatment: string
  ) {
    this.id = id;
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.active = active;
    this.gender = gender;
    this.phone = phone;
    this.address = address;
    this.sympthons = sympthons;
    this.observations = observations;
    this.treatment = treatment;
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 100 })
  name: string;

  @Column({ type: "varchar", length: 100 })
  lastname: string;

  @Column({ type: "integer" })
  age: number;

  @Column({ type: "varchar", length: 10 })
  gender: string;

  @Column({ type: "varchar", length: 50 })
  phone: string;

  @Column({ type: "varchar", length: 100 })
  address: string;

  @Column({ type: "text" })
  sympthons: string;

  @Column({ type: "text" })
  observations: string;

  @Column({ type: "text" })
  treatment: string;

  @Column({ type: "boolean", default: true })
  active: boolean;
}
