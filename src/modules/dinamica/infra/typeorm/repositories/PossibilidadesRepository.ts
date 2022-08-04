import { getRepository, Repository } from "typeorm";

import {
  ICreatePossibilidadeDTO,
  IPatchPossibilidadeDTO,
} from "../../../dtos/ICreatePossibilidadeDTO";
import { Possibilidades } from "../entities/Possibilidades";
import { IPossibilidadesRepository } from "./interfaces/IPossibilidadesRepository";

class PossibilidadesRepository implements IPossibilidadesRepository {
  private repository: Repository<Possibilidades>;

  constructor() {
    this.repository = getRepository(Possibilidades);
  }

  async create({
    descricao,
    num_cenario,
  }: ICreatePossibilidadeDTO): Promise<Possibilidades> {
    const possibilidades = this.repository.create({ descricao, num_cenario });

    await this.repository.save(possibilidades);

    return possibilidades;
  }

  async listPossibilidades(): Promise<Possibilidades[]> {
    const possibilidades = await this.repository
      .createQueryBuilder("possibilidades")
      .orderBy("id", "ASC")
      .getMany();

    return possibilidades;
  }

  async queryById(id: string): Promise<Possibilidades> {
    const possibilidade = await this.repository.findOne(id);

    return possibilidade;
  }

  async queryByNumCenario(num_cenario: number): Promise<Possibilidades> {
    const possibilidade = await this.repository.findOne({
      where: { num_cenario },
    });

    return possibilidade;
  }

  async updateById({
    id,
    descricao,
    num_cenario,
  }: IPatchPossibilidadeDTO): Promise<Possibilidades> {
    const possibilidade = await this.repository.findOne(id);

    possibilidade.descricao = descricao || possibilidade.descricao;
    possibilidade.num_cenario = num_cenario || possibilidade.num_cenario;

    await this.repository.save(possibilidade);

    return possibilidade;
  }

  async deleteById(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}

export { PossibilidadesRepository };
