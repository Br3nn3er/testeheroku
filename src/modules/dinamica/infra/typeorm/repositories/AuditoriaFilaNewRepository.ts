import { getRepository, Repository } from "typeorm";

import {
  ICreateAuditoriaFilaNewDTO,
  IPatchAuditoriaFilaNewDTO,
} from "../../../dtos/ICreateAuditoriaFilaNewDTO";
import { AuditoriaFilaNew } from "../entities/AuditoriaFilaNew";
import { IAuditoriaFilaNewRepository } from "./interfaces/IAuditoriaFilaNewRepository";

class AuditoriaFilaNewRepository implements IAuditoriaFilaNewRepository {
  private repository: Repository<AuditoriaFilaNew>;

  constructor() {
    this.repository = getRepository(AuditoriaFilaNew);
  }

  async create({
    id_turma,
    id_fila,
    prioridade_old,
    prioridade_new,
    stamp,
  }: ICreateAuditoriaFilaNewDTO): Promise<AuditoriaFilaNew> {
    const auditoriaNew = this.repository.create({
      id_turma,
      id_fila,
      prioridade_old,
      prioridade_new,
      stamp,
    });

    await this.repository.save(auditoriaNew);

    return auditoriaNew;
  }

  async listAllAuditoriaNew(): Promise<AuditoriaFilaNew[]> {
    const auditoriasNew = await this.repository
      .createQueryBuilder("auditoria_fila_new")
      .orderBy("id_turma", "ASC")
      .getMany();

    return auditoriasNew;
  }

  async queryById(id: string): Promise<AuditoriaFilaNew> {
    const auditoriaNew = await this.repository.findOne(id);

    return auditoriaNew;
  }

  async queryByIdTurmaIdFila(
    id_turma: number,
    id_fila: number
  ): Promise<AuditoriaFilaNew> {
    const auditoriaNew = await this.repository.findOne({
      where: { id_turma, id_fila },
    });

    return auditoriaNew;
  }

  async updateById({
    id,
    id_turma,
    id_fila,
    prioridade_old,
    prioridade_new,
    stamp,
  }: IPatchAuditoriaFilaNewDTO): Promise<AuditoriaFilaNew> {
    const auditoriaNew = await this.repository.findOne({ id });

    auditoriaNew.id_turma = id_turma || auditoriaNew.id_turma;
    auditoriaNew.id_fila = id_fila || auditoriaNew.id_fila;
    auditoriaNew.prioridade_old = prioridade_old || auditoriaNew.prioridade_old;
    auditoriaNew.prioridade_new = prioridade_new || auditoriaNew.prioridade_new;
    auditoriaNew.stamp = stamp || auditoriaNew.stamp;

    await this.repository.save(auditoriaNew);

    return auditoriaNew;
  }

  async deleteById(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}

export { AuditoriaFilaNewRepository };
