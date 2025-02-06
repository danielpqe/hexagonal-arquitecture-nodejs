import { ObjectLiteral, ObjectType, Repository } from "typeorm";
import DatabaseBootstrap from "../../bootstrap/database.bootstrap";
import _ from "lodash";
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
  ): Promise<T> {
    const dataSource = DatabaseBootstrap.dataSource;
    const repository: Repository<T> = dataSource.getRepository(this.entity);
    let recordToUpdate: any = await repository.find({
      where,
      relations,
    });
    recordToUpdate = _.merge(recordToUpdate, entity);
    return await repository.save(recordToUpdate);
  }

  async delete(where: object): Promise<T> {
    const dataSource = DatabaseBootstrap.dataSource;
    const repository: Repository<T> = dataSource.getRepository(this.entity);
    let recordToDelete: any = await repository.find({
      where,
    });
    recordToDelete = _.merge(recordToDelete, { active: false });
    return await repository.save(recordToDelete);
  }

  async findOne(where: object = {}, relations: string[] = []): Promise<T> {
    const dataSource = DatabaseBootstrap.dataSource;
    const repository: Repository<T> = dataSource.getRepository(this.entity);
    const data: T | null = await repository.findOne({
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
}
