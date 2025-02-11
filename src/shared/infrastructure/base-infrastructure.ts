import { ObjectLiteral, ObjectType, Repository } from "typeorm";
import DatabaseBootstrap from "../../bootstrap/database.bootstrap";
import _ from "lodash";
import Result from "../application/interfaces/result.interface";
import { ResponseDto } from "../application/dto/response.dto";

export abstract class BaseInfrastructure<T extends ObjectLiteral> {
  constructor(private entity: ObjectType<T>) {}

  async insert(entity: T): Promise<Result<T>> {
    const dataSource = DatabaseBootstrap.dataSource;
    const repository: Repository<T> = dataSource.getRepository(this.entity);
    const instance = repository.create(entity);
    const data: T = await repository.save(instance);
    return ResponseDto<T>("", data);
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
    await repository.save(recordToUpdate);

    return ResponseDto<T>("", recordToUpdate);
  }

  async delete(where: object): Promise<Result<T>> {
    const dataSource = DatabaseBootstrap.dataSource;
    const repository: Repository<T> = dataSource.getRepository(this.entity);
    let recordToDelete: any = await repository.find({
      where,
    });
    recordToDelete = _.merge(recordToDelete, { active: false });
    await repository.save(recordToDelete);
    return ResponseDto<T>("", recordToDelete);
  }

  async findOne(
    where: object = {},
    relations: string[] = []
  ): Promise<Result<T>> {
    const dataSource = DatabaseBootstrap.dataSource;
    const repository: Repository<T> = dataSource.getRepository(this.entity);
    const data: T | null = await repository.findOne({
      where,
      relations,
    });
    if (!data) {
      throw new Error("Record not found");
    }
    return ResponseDto<T>("", data);
  }

  async findAll(
    where: object = {},
    relations: string[] = [],
    order: object = {}
  ): Promise<Result<T>> {
    const dataSource = DatabaseBootstrap.dataSource;
    const repository = dataSource.getRepository(this.entity);
    const _where = Object.assign(where, { active: true });
    const data: T[] = await repository.find({
      where: _where,
      relations,
      order,
    });
    return ResponseDto<T>("", data);
  }

  async getPage(
    page: number = 1,
    pageSize: number = 10,
    where: object = {},
    relations: string[] = [],
    order: object = {}
  ): Promise<Result<T>> {
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
    return ResponseDto<T>("", data, total);
  }
}
