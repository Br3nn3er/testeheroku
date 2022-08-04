import { getRepository, Repository } from "typeorm";

import { ICreateDistribuicoesPossibilidadeDTO } from "../../../dtos/ICreateDistribuicoesPossibilidadeDTO";
import { DistribuicoesPossibilidade } from "../entities/DistribuicoesPossibilidade";
import { IDistribuicoesPossibilidadeRepository } from "./interfaces/IDistribuicoesPossibilidadeRepository";

class DistribuicoesPossibilidadeRepository
  implements IDistribuicoesPossibilidadeRepository
{
  private repository: Repository<DistribuicoesPossibilidade>;

  constructor() {
    this.repository = getRepository(DistribuicoesPossibilidade);
  }

  async create({
    id_possibilidade,
    siape,
    id_turma,
  }: ICreateDistribuicoesPossibilidadeDTO): Promise<DistribuicoesPossibilidade> {
    const dist = this.repository.create({ id_possibilidade, siape, id_turma });

    await this.repository.save(dist);

    return dist;
  }

  async listDistribuicoes(): Promise<DistribuicoesPossibilidade[]> {
    const listDist = await this.repository
      .createQueryBuilder("distribuicoes_possibilidade")
      .orderBy("siape", "ASC")
      .getMany();

    return listDist;
  }

  async queryByPossibilidadeESiapeETurma(
    id_possibilidade: number,
    siape: string,
    id_turma: number
  ): Promise<DistribuicoesPossibilidade> {
    const dist = await this.repository.findOne({
      where: { id_possibilidade, siape, id_turma },
    });

    return dist;
  }

  async deleteByPossibilidadeESiapeETurma(
    id_possibilidade: number,
    siape: string,
    id_turma: number
  ): Promise<void> {
    await this.repository
      .createQueryBuilder()
      .delete()
      .from(DistribuicoesPossibilidade)
      .where("id_possibilidade = :id_possibilidade", { id_possibilidade })
      .andWhere("siape = :siape", { siape })
      .andWhere("id_turma = :id_turma", { id_turma })
      .execute();
  }
}

export { DistribuicoesPossibilidadeRepository };
