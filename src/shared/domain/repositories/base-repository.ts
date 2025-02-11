export interface BaseRepository<T, U> {
  insert(entity: T): Promise<T>;
  update(entity: T, where: object, relations: string[]): Promise<T>;
  delete(entity: T): Promise<T>;
  findOne(where: object, relations: string[]): Promise<T | null>;
  findAll(where: object, relations: string[], order: object): Promise<T[]>;
  getPage(
    page: number,
    pageSize: number,
    where: object,
    relations: string[],
    order: object
  ): Promise<{ data: T[]; count: number }>;
}
