import { ObjectLiteral, ObjectType, Repository } from "typeorm";
import DatabaseBootstrap from "../../bootstrap/database.bootstrap";
import _ from "lodash";
import Result from "../application/interfaces/result.interface";

export abstract class BaseInfrastructure<T extends ObjectLiteral> {
  constructor(private entity: ObjectType<T>) {}

  async insert(entity: T): Promise<T> {
    const dataSource = DatabaseBootstrap.dataSource;
    const repository: Repository<T> = dataSource.getRepository(this.entity);
    const instance = repository.create(entity);
    const data: T = await repository.save(instance);
    return data;
  }
  async update(
    entity: Partial<T>,
    where: object,
    relations: string[] = []
  ): Promise<Result<T>> {
    const dataSource = DatabaseBootstrap.dataSource;
    const repository: Repository<T> = dataSource.getRepository(this.entity);
    let recordToUpdate: any = await repository.find({
      where,
      relations,
    });
    recordToUpdate = _.merge(recordToUpdate, entity);
    return await repository.save(recordToUpdate);
  }

  async delete(where: object): Promise<Result<T>> {
    const dataSource = DatabaseBootstrap.dataSource;
    const repository: Repository<T> = dataSource.getRepository(this.entity);
    let recordToDelete: any = await repository.find({
      where,
    });
    recordToDelete = _.merge(recordToDelete, { active: false });
    return await repository.save(recordToDelete);
  }

  async findOne(
    where: object = {},
    relations: string[] = []
  ): Promise<Result<T>> {
    const dataSource = DatabaseBootstrap.dataSource;
    const repository: Repository<T> = dataSource.getRepository(this.entity);
    const data: Result<T> | null = await repository.findOne({
      where,
      relations,
    });
    if (!data) {
      throw new Error("Record not found");
    }
    return data;
  }

  async findAll(
    where: object = {},
    relations: string[] = [],
    order: object = {}
  ): Promise<T[]> {
    const dataSource = DatabaseBootstrap.dataSource;
    const repository: Repository<T> = dataSource.getRepository(this.entity);
    const _where = Object.assign(where, { active: true });
    const data: T[] = await repository.find({
      where: _where,
      relations,
      order,
    });
    return data;
  }

  async getPage(
    page: number = 1,
    pageSize: number = 10,
    where: object = {},
    relations: string[] = [],
    order: object = {}
  ): Promise<{ data: T[]; total: number }> {
    const dataSource = DatabaseBootstrap.dataSource;
    const repository: Repository<T> = dataSource.getRepository(this.entity);
    const _where = Object.assign(where, { active: true });
    const [data, total] = await repository.findAndCount({
      where: _where,
      relations,
      order,
      take: pageSize,
      skip: (page - 1) * pageSize,
    });
    return { data, total };
  }
}
