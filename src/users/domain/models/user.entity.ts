import "reflect-metadata";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToMany,
  ManyToOne,
} from "typeorm";

@Entity({ name: "users" })
export class UserEntity {
  constructor(
    id: number,
    name: string,
    lastname: string,
    age: number,
    password: string,
    refreshToken: string,
    active: boolean,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date
  ) {
    this.id = id;
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.password = password;
    this.refreshToken = refreshToken;
    this.active = active;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 100 })
  name: string;

  @Column({ type: "varchar", length: 100 })
  lastname: string;

  @Column({ type: "varchar", length: 100 })
  password: string;

  @Column({ type: "varchar", length: 100 })
  refreshToken: string;

  @Column({ type: "integer" })
  age: number;

  @Column({ type: "boolean", default: true })
  active: boolean;

  @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @Column({ type: "datetime", nullable: true })
  deletedAt: Date;
}
