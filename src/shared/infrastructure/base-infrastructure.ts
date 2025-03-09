import { ObjectLiteral, ObjectType, Repository } from "typeorm";
import DatabaseBootstrap from "../../bootstrap/database.bootstrap";
import _ from "lodash";
import Result from "../application/interfaces/result.interface";
import { ResponseDto } from "../application/dto/response.dto";
import { Trace } from "../helpers/trace.helper";
import { Logger } from "../helpers/logging.helper";

export abstract class BaseInfrastructure<T extends ObjectLiteral> {
  constructor(
    private entity: ObjectType<T>,
    private infrastructureName: string = ""
  ) {}

  async insert(entity: T): Promise<Result<T>> {
    const dataSource = DatabaseBootstrap.dataSource;
    const repository: Repository<T> = dataSource.getRepository(this.entity);
    const instance = repository.create(entity);
    const data: T = await repository.save(instance);
    return ResponseDto<T>(Trace.traceId(false), data);
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

    return ResponseDto<T>(Trace.traceId(false), recordToUpdate);
  }

  async delete(where: object): Promise<Result<T>> {
    const dataSource = DatabaseBootstrap.dataSource;
    const repository: Repository<T> = dataSource.getRepository(this.entity);
    const recordsToDelete = (await repository.find({ where })) as (T & {
      active: boolean;
    })[];
    if (!recordsToDelete.length) {
      // Optionally handle the case where no records are found
      return ResponseDto<T>(Trace.traceId(false), []);
    }

    // Mark each record as inactive
    recordsToDelete.forEach((record) => {
      record.active = false;
    });

    // Save the updated records
    await repository.save(recordsToDelete);

    return ResponseDto<T>(Trace.traceId(false), recordsToDelete);
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
    return ResponseDto<T>(Trace.traceId(false), data);
  }

  async findAll(
    where: object = {},
    relations: string[] = [],
    order: object = {}
  ): Promise<Result<T>> {
    Logger.getLogger().info({
      typeElement: this.infrastructureName || "BaseInfrastructure",
      typeAction: "getDrivers",
      traceId: Trace.traceId(),
      message: "Get all drivers",
      query: JSON.stringify({}),
      datetime: new Date().toISOString(),
    });

    const dataSource = DatabaseBootstrap.dataSource;
    const repository = dataSource.getRepository(this.entity);
    const _where = Object.assign(where, { active: true });
    const data: T[] = await repository.find({
      where: _where,
      relations,
      order,
    });
    return ResponseDto<T>(Trace.traceId(false), data);
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
    return ResponseDto<T>(Trace.traceId(), data, total);
  }
}
