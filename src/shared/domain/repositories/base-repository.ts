export interface BaseRepository<T, U> {
  insert(entity: T): Promise<T>;
  update(entity: T): Promise<T>;
  delete(id: U): Promise<boolean>;
  findById(id: U): Promise<T | null>;
  findAll(
    where: { [s: string]: string | number | boolean } | null,
    order: { [s: string]: string } | null
  ): Promise<T[]>;
}
