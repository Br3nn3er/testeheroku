import { getRepository, Repository } from "typeorm";

import {
  ICreateDistribuicaoCargaDTO,
  IPatchDistribuicaoCargaDTO,
} from "../../../dtos/ICreateDistribuicaoCargaDTO";
import { DistribuicaoCarga } from "../entities/DistribuicaoCarga";
import { IDistribuicaoCargaRepository } from "./interfaces/IDistribuicaoCargaRepository";

class DistribuicaoCargaRepository implements IDistribuicaoCargaRepository {
  private repository: Repository<DistribuicaoCarga>;

  constructor() {
    this.repository = getRepository(DistribuicaoCarga);
  }

  async create({
    cenario,
    siape,
    regra,
    carga,
  }: ICreateDistribuicaoCargaDTO): Promise<DistribuicaoCarga> {
    const dist = this.repository.create({ cenario, siape, regra, carga });

    await this.repository.save(dist);

    return dist;
  }

  async listDistribuicoes(): Promise<DistribuicaoCarga[]> {
    const listDist = this.repository
      .createQueryBuilder("distribuicao_carga")
      .orderBy("siape", "ASC")
      .getMany();

    return listDist;
  }

  async queryByCenarioESiapeERegra(
    cenario: number,
    siape: string,
    regra: string
  ): Promise<DistribuicaoCarga> {
    const dist = await this.repository.findOne({
      where: { cenario, siape, regra },
    });

    return dist;
  }

  async update({
    cenario,
    siape,
    regra,
    carga,
  }: IPatchDistribuicaoCargaDTO): Promise<DistribuicaoCarga> {
    await this.repository
      .createQueryBuilder()
      .update(DistribuicaoCarga)
      .set({ carga })
      .where("cenario = :cenario", { cenario })
      .andWhere("siape = :siape", { siape })
      .andWhere("regra = :regra", { regra })
      .execute();

    const distUpdated = await this.repository.findOne({
      where: { cenario, siape, regra },
    });

    return distUpdated;
  }

  async deleteByCenarioESiapeERegra(
    cenario: number,
    siape: string,
    regra: string
  ): Promise<void> {
    await this.repository
      .createQueryBuilder()
      .delete()
      .from(DistribuicaoCarga)
      .where("cenario = :cenario", { cenario })
      .andWhere("siape = :siape", { siape })
      .andWhere("regra = :regra", { regra })
      .execute();
  }
}

export { DistribuicaoCargaRepository };
