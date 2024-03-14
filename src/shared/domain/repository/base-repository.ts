export interface BaseRepository<T, U> {
  insert(entity: T): Promise<T>;
  update(entity: T): Promise<T>;
  delete(id: U): Promise<boolean>;
  findById(id: U): Promise<T>;
  findAll(): Promise<T[]>;
}
