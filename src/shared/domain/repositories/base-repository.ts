export interface BaseRepository<T> {
  insert(entity: T): Promise<T>;
  update(entity: T): Promise<T>;
  delete(id: number): Promise<boolean>;
  findById(id: number): Promise<T | null>;
  findAll(): Promise<T[]>;
}
