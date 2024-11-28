export abstract class BaseInfrastructure<T, U> {
  insert(entity: T): Promise<T> {
    throw new Error("Method not implemented.");
  }
  update(entity: T): Promise<T> {
    throw new Error("Method not implemented.");
  }
  delete(id: U): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  findById(id: U): Promise<T | null> {
    throw new Error("Method not implemented.");
  }
  findAll(): Promise<T[]> {
    const users = [
      {
        name: "Daniel Q",
        age: 30,
      },
      {
        name: "John Doe",
        age: 40,
      },
      {
        name: "Jane Doe",
        age: 35,
      },
    ];
    return Promise.resolve(users as unknown as T[]);
  }
}
