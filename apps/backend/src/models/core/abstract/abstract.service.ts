import {
  DeepPartial,
  DeleteResult,
  FindOptionsWhere,
  Repository,
} from "typeorm";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import { QueryDto } from "./dtos/query.dto";

interface ServiceOptions {
  relations?: string[];
}

export abstract class AbstractService<
  T extends { id: number },
  DTO extends DeepPartial<T>
> {
  protected repository: Repository<T>;
  protected relations: string[];

  constructor(repository: Repository<T>, options: ServiceOptions = {}) {
    const { relations = [] } = options;

    this.repository = repository;
    this.relations = relations;
  }

  entityToDto(entity: T): DTO {
    const dto: DTO = entity as DTO;
    return dto;
  }

  async getList(query: QueryDto): Promise<{ data: DTO[]; count: number }> {
    const [data, count]: [T[], number] = await this.repository.findAndCount({
      where: query.filter as FindOptionsWhere<T>,
      ...(query.sort && { order: query.sort }),
      ...(query.range && {
        skip: query.range[0],
        take: query.range[1] - query.range[0] + 1,
      }),
      relations: this.relations,
    });
    return { data: data.map((x) => this.entityToDto(x)), count: count };
  }

  async getOneById(id: { id: number }): Promise<{ data: DTO }> {
    const data: T = await this.repository.findOneOrFail({
      where: id as FindOptionsWhere<T>,
      relations: this.relations,
    });

    return { data: this.entityToDto(data) };
  }

  async updateOne(id: { id: number }, body: DTO): Promise<{ data: DTO }> {
    const updateBody = body as QueryDeepPartialEntity<T>;

    await this.repository.update(id.id, updateBody);
    const data: T = await this.repository.findOneOrFail({
      where: id as FindOptionsWhere<T>,
      relations: this.relations,
    });

    return { data: this.entityToDto(data) };
  }

  async updateMany(body: DTO[], query: QueryDto): Promise<{ data: DTO[] }> {
    const updateBody = body as QueryDeepPartialEntity<T>;

    await this.repository.update(
      query.filter?.id as FindOptionsWhere<T>,
      updateBody
    );
    const data: T[] = await this.repository.find({
      where: query.filter as FindOptionsWhere<T>,
      relations: this.relations,
    });
    return { data: data.map((x) => this.entityToDto(x)) };
  }

  async create(body: DTO) {
    const newData: T[] | T = this.repository.create(body);
    const saved = await this.repository.save(newData);

    return { data: this.entityToDto(saved) };
  }

  async deleteOne(id: { id: number }): Promise<DeleteResult> {
    return this.repository.delete(id.id);
  }

  async deleteMany(query: QueryDto): Promise<DeleteResult> {
    return this.repository.delete(query.filter as FindOptionsWhere<T>);
  }
}
