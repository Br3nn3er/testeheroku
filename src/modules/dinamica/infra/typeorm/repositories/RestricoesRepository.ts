import { getRepository, Repository } from "typeorm";

import { ICreateRestricoesDTO } from "../../../dtos/ICreateRestricoesDTO";
import { Restricoes } from "../entities/Restricoes";
import { IRestricoesRepository } from "./interfaces/IRestricoesRepository";

class RestricoesRepository implements IRestricoesRepository {
  private repository: Repository<Restricoes>;

  constructor() {
    this.repository = getRepository(Restricoes);
  }

  async create({
    siape,
    dia,
    letra,
  }: ICreateRestricoesDTO): Promise<Restricoes> {
    const restricoes = this.repository.create({ siape, dia, letra });

    await this.repository.save(restricoes);

    return restricoes;
  }

  async listRestricoes(): Promise<Restricoes[]> {
    const listRestricoes = await this.repository
      .createQueryBuilder("restricoes")
      .orderBy("siape", "ASC")
      .getMany();

    return listRestricoes;
  }

  async queryBySiapeEDiaELetra(
    siape: string,
    dia: string,
    letra: string
  ): Promise<Restricoes> {
    const restricoes = await this.repository.findOne({
      where: { siape, dia, letra },
    });

    return restricoes;
  }

  async queryBySiape(
    siape: string
  ): Promise<Restricoes[]> {
    const restricoes = await this.repository.find({
      where: { siape },
    });

    return restricoes;
  }
  async deleteBySiapeEDiaELetra(
    siape: string,
    dia: string,
    letra: string
  ): Promise<void> {
    await this.repository
      .createQueryBuilder()
      .delete()
      .from(Restricoes)
      .where("siape = :siape", { siape })
      .andWhere("dia = :dia", { dia })
      .andWhere("letra = :letra", { letra })
      .execute();
  }
}

export { RestricoesRepository };
