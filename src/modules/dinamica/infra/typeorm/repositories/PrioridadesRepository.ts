import { getRepository, Repository } from "typeorm";

import {
  ICreatePrioridadesDTO,
  IPatchPrioridadesDTO,
} from "../../../dtos/ICreatePrioridadesDTO";
import { Prioridades } from "../entities/Prioridades";
import { IPrioridadesRepository } from "./interfaces/IPrioridadesRepository";

class PrioridadesRepository implements IPrioridadesRepository {
  private prioridadesRepository: Repository<Prioridades>;

  constructor() {
    this.prioridadesRepository = getRepository(Prioridades);
  }

  async create({
    prioridade,
    codigo_disc,
    siape,
  }: ICreatePrioridadesDTO): Promise<Prioridades> {
    const prioridades = this.prioridadesRepository.create({
      prioridade,
      codigo_disc,
      siape,
    });

    await this.prioridadesRepository.save(prioridades);

    return prioridades;
  }

  async listAllPrioridades(): Promise<Prioridades[]> {
    const listPrioridades = await this.prioridadesRepository
      .createQueryBuilder("prioridades")
      .orderBy("siape", "ASC")
      .getMany();

    return listPrioridades;
  }

  async queryById(id: string): Promise<Prioridades> {
    const prioridade = await this.prioridadesRepository.findOne(id);

    return prioridade;
  }

  async queryBySiapeECodigo(
    siape: string,
    codigo_disc: string
  ): Promise<Prioridades> {
    const prioridade = await this.prioridadesRepository.findOne({
      where: { siape, codigo_disc },
    });

    return prioridade;
  }

  async updateById({
    id,
    prioridade,
    codigo_disc,
    siape,
  }: IPatchPrioridadesDTO): Promise<Prioridades> {
    const prioridadeToUpdate = await this.prioridadesRepository.findOne(id);

    prioridadeToUpdate.prioridade = prioridade || prioridadeToUpdate.prioridade;
    prioridadeToUpdate.codigo_disc =
      codigo_disc || prioridadeToUpdate.codigo_disc;
    prioridadeToUpdate.siape = siape || prioridadeToUpdate.siape;

    await this.prioridadesRepository.save(prioridadeToUpdate);

    return prioridadeToUpdate;
  }

  async deleteById(id: string): Promise<void> {
    await this.prioridadesRepository.delete(id);
  }
}

export { PrioridadesRepository };
