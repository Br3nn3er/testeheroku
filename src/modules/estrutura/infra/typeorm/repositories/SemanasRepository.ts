import { getRepository, Repository } from "typeorm";

import {
  ICreateSemanaDTO,
  IPatchSemanaDTO,
} from "../../../dtos/ICreateUpdateSemanaDTO";
import { Semana } from "../entities/Semana";
import { ISemanasRepository } from "./interfaces/ISemanasRepository";

class SemanasRepository implements ISemanasRepository {
  private repository: Repository<Semana>;

  constructor() {
    this.repository = getRepository(Semana);
  }

  async createSemana({ dia, descricao }: ICreateSemanaDTO): Promise<Semana> {
    const semana = await this.repository.create({ dia, descricao });

    await this.repository.save(semana);

    return semana;
  }

  async listAllSemanas(): Promise<Semana[]> {
    const semanas = await this.repository
      .createQueryBuilder("semana")
      .orderBy("dia", "ASC")
      .getMany();

    return semanas;
  }

  async queryByDia(dia: string): Promise<Semana> {
    const semana = await this.repository.findOne(dia);

    return semana;
  }

  async update({ dia, descricao }: IPatchSemanaDTO): Promise<Semana> {
    const semana = await this.repository.findOne({ dia });

    semana.descricao = descricao || semana.descricao;

    await this.repository.save(semana);

    return semana;
  }

  async deleteByDia(dia: string): Promise<void> {
    await this.repository.delete(dia);
  }
}

export { SemanasRepository };
