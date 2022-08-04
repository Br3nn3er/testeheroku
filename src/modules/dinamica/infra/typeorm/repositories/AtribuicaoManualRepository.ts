import { getRepository, Repository } from "typeorm";

import { ICreateAtribuicaoManualDTO } from "../../../dtos/ICreateAtribuicaoManualDTO";
import { AtribuicaoManual } from "../entities/AtribuicaoManual";
import { IAtribuicaoManualRepository } from "./interfaces/IAtribuicaoManualRepository";

class AtribuicaoManualRepository implements IAtribuicaoManualRepository {
  private repository: Repository<AtribuicaoManual>;

  constructor() {
    this.repository = getRepository(AtribuicaoManual);
  }

  async create({
    num_cenario,
    siape,
    id_turma,
  }: ICreateAtribuicaoManualDTO): Promise<AtribuicaoManual> {
    const atribuicao = this.repository.create({ num_cenario, siape, id_turma });

    await this.repository.save(atribuicao);

    return atribuicao;
  }

  async listAllAtribuicoes(): Promise<AtribuicaoManual[]> {
    const atribuicoes = await this.repository
      .createQueryBuilder("atribuicao_manual")
      .orderBy("num_cenario", "ASC")
      .getMany();

    return atribuicoes;
  }

  async queryByCenarioETurma(
    num_cenario: number,
    id_turma: number
  ): Promise<AtribuicaoManual> {
    const atribuicao = this.repository.findOne({
      where: { num_cenario, id_turma },
    });

    return atribuicao;
  }

  async deleteByCenarioETurma(
    num_cenario: number,
    id_turma: number
  ): Promise<void> {
    await this.repository
      .createQueryBuilder()
      .delete()
      .from(AtribuicaoManual)
      .where("num_cenario = :num_cenario", { num_cenario })
      .andWhere("id_turma = :id_turma", { id_turma })
      .execute();
  }
}

export { AtribuicaoManualRepository };
