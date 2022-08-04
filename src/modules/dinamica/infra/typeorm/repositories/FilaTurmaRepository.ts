import { getRepository, Repository } from "typeorm";

import { Curso } from "../../../../estrutura/infra/typeorm/entities/Curso";
import { Disciplina } from "../../../../estrutura/infra/typeorm/entities/Disciplina";
import { Professor } from "../../../../estrutura/infra/typeorm/entities/Professor";
import {
  ICreateFilaTurmaDTO,
  IPatchFilaTurmaDTO,
} from "../../../dtos/ICreateFilaTurmaDTO";
import { FilaTurma } from "../entities/FilaTurma";
import { IFilaTurmaRepository } from "./interfaces/IFilaTurmaRepository";

class FilaTurmaRepository implements IFilaTurmaRepository {
  private repository: Repository<FilaTurma>;

  constructor() {
    this.repository = getRepository(FilaTurma);
  }

  async create({
    siape,
    id_turma,
    codigo_disc,
    turma,
    pos,
    prioridade,
    qte_ministrada,
    qte_maximo,
    status,
    ch,
    id,
    periodo_preferencial,
  }: ICreateFilaTurmaDTO): Promise<FilaTurma> {
    const fila = this.repository.create({
      siape,
      id_turma,
      codigo_disc,
      turma,
      pos,
      prioridade,
      qte_ministrada,
      qte_maximo,
      status,
      ch,
      id,
      periodo_preferencial,
    });

    await this.repository.save(fila);

    return fila;
  }

  async listFilas(): Promise<FilaTurma[]> {
    const filasTurma = await this.repository
      .createQueryBuilder("fila_turma")
      .orderBy("id", "ASC")
      .getMany();

    return filasTurma;
  }

  async queryById(id: number): Promise<FilaTurma> {
    const filaFinded = await this.repository.findOne(id);

    return filaFinded;
  }

  async queryByTurma(id_turma: number): Promise<FilaTurma[]> {
    const filaFinded = await getRepository(FilaTurma)
      .createQueryBuilder("ft")
      .select("nome")
      .addSelect("ft.pos", "possicao")
      .addSelect("ft.prioridade", "prioridade")
      .addSelect("ft.qte_ministrada", "qte_ministrada")
      .addSelect("ft.qte_maximo", "qte_maximo")
      .leftJoin(Professor, "pf", "pf.siape = ft.siape")
      .where("ft.id_turma = :id_turma", { id_turma })
      .orderBy("ft.prioridade", "DESC")
      .getRawMany();

    return filaFinded;
  }

  async queryBySiape(siape: string): Promise<FilaTurma[]> {
    const filaFinded = await getRepository(FilaTurma)
      .createQueryBuilder("ft")
      .select("dp.nome", "nome_diciplina")
      .addSelect("ft.turma", "turma")
      .addSelect("cs.nome", "nome_curso")
      .addSelect("ft.pos", "possicao")
      .addSelect("ft.prioridade", "prioridade")
      .addSelect("ft.qte_ministrada", "qte_ministrada")
      .addSelect("ft.qte_maximo", "qte_maximo")
      .leftJoin(Disciplina, "dp", "dp.codigo = ft.codigo_disc")
      .leftJoin(Curso, "cs", "cs.codigo = dp.curso")
      .where("ft.siape = :siape", { siape })
      .getRawMany();

    return filaFinded;
  }

  async updateById({
    siape,
    id_turma,
    codigo_disc,
    turma,
    pos,
    prioridade,
    qte_ministrada,
    qte_maximo,
    status,
    ch,
    id,
    periodo_preferencial,
  }: IPatchFilaTurmaDTO): Promise<FilaTurma> {
    const filaTurma = await this.repository.findOne(id);

    filaTurma.id_turma = id_turma || filaTurma.id_turma;
    filaTurma.turma = turma || filaTurma.turma;
    filaTurma.siape = siape || filaTurma.siape;
    filaTurma.pos = pos || filaTurma.pos;
    filaTurma.prioridade = prioridade || filaTurma.prioridade;
    filaTurma.qte_ministrada = qte_ministrada || filaTurma.qte_ministrada;
    filaTurma.qte_maximo = qte_maximo || filaTurma.qte_maximo;
    filaTurma.ch = ch || filaTurma.ch;
    filaTurma.qte_ministrada = qte_ministrada || filaTurma.qte_ministrada;
    filaTurma.periodo_preferencial =
      periodo_preferencial === null || periodo_preferencial === undefined
        ? filaTurma.periodo_preferencial
        : periodo_preferencial;
    filaTurma.codigo_disc = codigo_disc || filaTurma.codigo_disc;

    await this.repository.save(filaTurma);

    return filaTurma;
  }

  async deleteById(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}

export { FilaTurmaRepository };
