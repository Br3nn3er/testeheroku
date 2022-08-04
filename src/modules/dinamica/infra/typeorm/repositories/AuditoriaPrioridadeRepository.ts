import { getRepository, Repository } from "typeorm";

import {
  ICreateAuditoriaPrioridadeDTO,
  IPatchAuditoriaPrioridadeDTO,
} from "../../../dtos/ICreateAuditoriaPrioridadeDTO";
import { AuditoriaPrioridade } from "../entities/AuditoriaPrioridade";
import { IAuditoriaPrioridadeRepository } from "./interfaces/IAuditoriaPrioridadeRepository";

class AuditoriaPrioridadeRepository implements IAuditoriaPrioridadeRepository {
  private repository: Repository<AuditoriaPrioridade>;

  constructor() {
    this.repository = getRepository(AuditoriaPrioridade);
  }

  async create({
    siape,
    codigo_disc,
    prioridade_antiga,
    prioridade_nova,
    stamp,
  }: ICreateAuditoriaPrioridadeDTO): Promise<AuditoriaPrioridade> {
    const auditoriaPrioridade = this.repository.create({
      siape,
      codigo_disc,
      prioridade_antiga,
      prioridade_nova,
      stamp,
    });

    await this.repository.save(auditoriaPrioridade);

    return auditoriaPrioridade;
  }

  async listAllAuditorias(): Promise<AuditoriaPrioridade[]> {
    const auditoriasPrioridade = await this.repository
      .createQueryBuilder("auditoria_prioridade")
      .orderBy("siape", "ASC")
      .getMany();

    return auditoriasPrioridade;
  }

  async queryById(id: string): Promise<AuditoriaPrioridade> {
    const auditoriaFounded = await this.repository.findOne(id);

    return auditoriaFounded;
  }

  async queryBySiape(siape: string): Promise<AuditoriaPrioridade> {
    const auditoriaFounded = await this.repository.findOne({ siape });

    return auditoriaFounded;
  }

  async update({
    id,
    siape,
    codigo_disc,
    prioridade_antiga,
    prioridade_nova,
    stamp,
  }: IPatchAuditoriaPrioridadeDTO): Promise<AuditoriaPrioridade> {
    const auditoria = await this.repository.findOne(id);

    auditoria.siape = siape || auditoria.siape;
    auditoria.codigo_disc = codigo_disc || auditoria.codigo_disc;
    auditoria.prioridade_antiga =
      prioridade_antiga || auditoria.prioridade_antiga;
    auditoria.prioridade_nova = prioridade_nova || auditoria.prioridade_nova;
    auditoria.stamp = stamp || auditoria.stamp;

    await this.repository.save(auditoria);

    return auditoria;
  }

  async deleteById(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}

export { AuditoriaPrioridadeRepository };
