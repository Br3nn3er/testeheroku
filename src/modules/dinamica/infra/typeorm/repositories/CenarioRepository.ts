import { getRepository, Repository } from "typeorm";

import {
  ICreateCenarioDTO,
  IPatchCenarioDTO,
} from "../../../dtos/ICreateCenarioDTO";
import { Cenario } from "../entities/Cenario";
import { ICenarioRepository } from "./interfaces/ICenarioRepository";

class CenarioRepository implements ICenarioRepository {
  private repository: Repository<Cenario>;

  constructor() {
    this.repository = getRepository(Cenario);
  }

  async create({
    descricao_cenario,
    ano,
    semestre,
  }: ICreateCenarioDTO): Promise<Cenario> {
    const cenario = this.repository.create({
      descricao_cenario,
      ano,
      semestre,
    });

    await this.repository.save(cenario);

    return cenario;
  }

  async listCenarios(): Promise<Cenario[]> {
    const cenarios = await this.repository
      .createQueryBuilder("cenario")
      .orderBy("num_cenario")
      .getMany();

    return cenarios;
  }

  async queryByNumCenario(num_cenario: string): Promise<Cenario> {
    const cenario = await this.repository.findOne({ where: { num_cenario } });

    return cenario;
  }

  async queryByAnoESemestre(ano: number, semestre: number): Promise<Cenario> {
    const cenario = await this.repository.findOne({ where: { ano, semestre } });

    return cenario;
  }

  async updateByNumCenario({
    num_cenario,
    descricao_cenario,
    ano,
    semestre,
  }: IPatchCenarioDTO): Promise<Cenario> {
    const cenario = await this.repository.findOne({ where: { num_cenario } });

    cenario.descricao_cenario = descricao_cenario || cenario.descricao_cenario;
    cenario.ano = ano || cenario.ano;
    cenario.semestre = semestre || cenario.semestre;

    await this.repository.save(cenario);

    return cenario;
  }

  async deleteByNumCenario(num_cenario: string): Promise<void> {
    await this.repository.delete(num_cenario);
  }
}

export { CenarioRepository };
