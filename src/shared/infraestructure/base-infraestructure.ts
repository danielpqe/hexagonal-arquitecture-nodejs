export abstract class BaseInfraestructure<T, U> {
  delete(id: U): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  findById(id: U): Promise<T> {
    throw new Error("Method not implemented.");
  }
  findAll(): Promise<T[]> {
    return Promise.resolve([{ user: "dan" }, { user: "Tam" }] as any[]);
  }
  insert(user: T): Promise<T> {
    return Promise.resolve(user);
  }
  update(user: T): Promise<T> {
    return Promise.resolve(user);
  }
}
