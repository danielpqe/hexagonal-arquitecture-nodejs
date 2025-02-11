import Result from "../../application/interfaces/result.interface";

export interface BaseRepository<T, U> {
  insert(entity: T): Promise<Result<T>>;
  update(entity: T, where: object, relations: string[]): Promise<Result<T>>;
  delete(where: object): Promise<Result<T>>;
  findOne(where: object, relations: string[]): Promise<Result<T> | null>;
  findAll(
    where: object,
    relations: string[],
    order: object
  ): Promise<Result<T>>;
  getPage(
    page: number,
    pageSize: number,
    where: object,
    relations: string[],
    order: object
  ): Promise<Result<T>>;
}
