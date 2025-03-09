import { DTOAbstract } from "../../../drivers/application/dto/list.dto";
import { BaseRepository } from "../../domain/repositories/base-repository";
import Result from "./result.interface";

export class BaseApplication<T> {
  constructor(
    private repository: BaseRepository<T, number>,
    private dto?: DTOAbstract<T>
  ) {}

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

  async delete(where: object): Promise<Result<T>> {
    const result = await this.repository.delete(where);
    return this.dto ? this.dto.mapping(result) : result;
  }

  async findOne(where: object, relations: string[]): Promise<Result<T> | null> {
    const result = await this.repository.findOne(where, relations);
    if (!result) return null;
    return this.dto ? this.dto.mapping(result) : result;
  }

  async findAll(
    where: object,
    relations: string[],
    order: object
  ): Promise<Result<T>> {
    const result = await this.repository.findAll(where, relations, order);
    return this.dto ? this.dto.mapping(result) : result;
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
