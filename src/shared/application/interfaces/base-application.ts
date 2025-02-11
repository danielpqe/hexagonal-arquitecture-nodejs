import { BaseRepository } from "../../domain/repositories/base-repository";
import Result from "./result.interface";

export class BaseApplication<T> {
  constructor(private repository: BaseRepository<T, number>) {}

  async add(entity: T): Promise<Result<T>> {
    return await this.repository.insert(entity);
  }

  async update(
    entity: T,
    where: object,
    relations: string[]
  ): Promise<Result<T>> {
    return await this.repository.update(entity, where, relations);
  }

  async delete(where: object): Promise<Result<T> | null> {
    return await this.repository.delete(where);
  }

  async findOne(where: object, relations: string[]): Promise<Result<T> | null> {
    return await this.repository.findOne(where, relations);
  }

  async findAll(
    where: object,
    relations: string[],
    order: object
  ): Promise<Result<T>> {
    return await this.repository.findAll(where, relations, order);
  }

  async getPage(
    page: number,
    pageSize: number,
    where: object,
    relations: string[],
    order: object
  ): Promise<Result<T>> {
    return await this.repository.getPage(
      page,
      pageSize,
      where,
      relations,
      order
    );
  }
}
