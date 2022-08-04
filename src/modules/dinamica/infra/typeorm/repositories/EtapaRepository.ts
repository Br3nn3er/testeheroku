import { getRepository, Repository } from "typeorm";

import { ICreateEtapaDTO, IPatchEtapaDTO } from "../../../dtos/ICreateEtapaDTO";
import { Etapa } from "../entities/Etapa";
import { IEtapaRepository } from "./interfaces/IEtapaRepository";

class EtapaRepository implements IEtapaRepository {
  private repository: Repository<Etapa>;

  constructor() {
    this.repository = getRepository(Etapa);
  }

  async create({ codigo, ativo, descricao }: ICreateEtapaDTO): Promise<Etapa> {
    const etapa = this.repository.create({ codigo, ativo, descricao });

    await this.repository.save(etapa);

    return etapa;
  }

  async listEtapas(): Promise<Etapa[]> {
    const etapas = await this.repository
      .createQueryBuilder("etapa")
      .orderBy("id", "ASC")
      .getMany();

    return etapas;
  }

  async queryById(id: string): Promise<Etapa> {
    const etapa = await this.repository.findOne(id);

    return etapa;
  }

  async queryByCodigo(codigo: string): Promise<Etapa> {
    const etapa = await this.repository.findOne({ where: codigo });

    return etapa;
  }

  async updateById({
    id,
    codigo,
    ativo,
    descricao,
  }: IPatchEtapaDTO): Promise<Etapa> {
    const etapa = await this.repository.findOne(id);

    etapa.codigo = codigo || etapa.codigo;
    etapa.ativo = ativo === null || ativo === undefined ? etapa.ativo : ativo;
    etapa.descricao = descricao || etapa.descricao;

    await this.repository.save(etapa);

    return etapa;
  }

  async deleteById(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}

export { EtapaRepository };
