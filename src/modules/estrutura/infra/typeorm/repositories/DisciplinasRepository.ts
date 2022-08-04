import { getRepository, Repository } from "typeorm";

import {
  ICreateDisciplinaDTO,
  IPatchDisciplinaDTO,
} from "../../../dtos/ICreateUpdateDisciplinaDTO";
import { Disciplina } from "../entities/Disciplina";
import { IDisciplinasRepository } from "./interfaces/IDisciplinasRepository";
import {Turma} from "../entities/Turma";
import {FilaTurmaNew} from "../../../../dinamica/infra/typeorm/entities/FilaTurmaNew";
import {Fila} from "../../../../dinamica/infra/typeorm/entities/Fila";

class DisciplinasRepository implements IDisciplinasRepository {
  private repository: Repository<Disciplina>;

  constructor() {
    this.repository = getRepository(Disciplina);
  }

  async createDisciplina({
    codigo,
    nome,
    ch_teorica,
    ch_pratica,
    ch_total,
    curso,
    temfila,
    periodo,
    cod_antigo,
  }: ICreateDisciplinaDTO): Promise<Disciplina> {
    const disciplina = await this.repository.create({
      codigo,
      nome,
      ch_teorica,
      ch_pratica,
      ch_total,
      curso,
      temfila,
      periodo,
      cod_antigo,
    });

    await this.repository.save(disciplina);

    return disciplina;
  }

  async listAllDisciplinas(): Promise<Disciplina[]> {
    const disciplinas = await this.repository
      .createQueryBuilder("disciplina")
      .orderBy("codigo", "ASC")
      .getMany();

    return disciplinas;
  }

  async queryByCodigo(codigo: string): Promise<Disciplina> {
    const disciplina = await this.repository.findOne({ codigo });

    return disciplina;
  }

  async queryBySiapeEAnoESemestre(
    siape: string,
    ano: number,
    semestre: number
  ): Promise<Disciplina[]> {
    const disciplinas = await getRepository(Disciplina)
      .createQueryBuilder("dp",)
      .select([ 'dp.codigo AS codigo_disciplina',
        'dp.nome AS nome_disciplina',
        'tm.turma AS turma',
        'dp.curso AS codigo_curso',
        'fl.siape AS siape',
        'ftn.prioridade AS prioridade',
        'fl.pos AS posicao',
        'fl.qte_ministrada AS qte_ministrada',
        'ftn.id_turma AS id_turma'])
      .leftJoin(Turma, "tm","dp.codigo = tm.codigo_disc")
      .leftJoin(FilaTurmaNew,"ftn","tm.id = ftn.id_turma")
      .leftJoin(Fila,"fl","fl.id = ftn.id_fila")
      .where("fl.siape = :siape", { siape })
      .andWhere("tm.ano = :ano", { ano })
      .andWhere("tm.semestre = :semestre", { semestre })
      .orderBy("codigo", "ASC")
      .getRawMany();

    return disciplinas;
  }

  async updateByCodigo({
    codigo,
    nome,
    ch_teorica,
    ch_pratica,
    ch_total,
    curso,
    temfila,
    periodo,
  }: IPatchDisciplinaDTO): Promise<Disciplina> {
    const disciplinaToUpdate = await this.repository.findOne({ codigo });

    disciplinaToUpdate.nome = nome || disciplinaToUpdate.nome;
    disciplinaToUpdate.ch_teorica = ch_teorica || disciplinaToUpdate.ch_teorica;
    disciplinaToUpdate.ch_pratica = ch_pratica || disciplinaToUpdate.ch_pratica;
    disciplinaToUpdate.ch_total = ch_total || disciplinaToUpdate.ch_total;
    disciplinaToUpdate.curso = curso || disciplinaToUpdate.curso;
    disciplinaToUpdate.temfila =
      temfila === undefined || temfila === null
        ? disciplinaToUpdate.temfila
        : temfila;
    disciplinaToUpdate.periodo = periodo || disciplinaToUpdate.periodo;

    await this.repository.save(disciplinaToUpdate);

    return disciplinaToUpdate;
  }

  async deleteByCodigo(codigo: string): Promise<void> {
    await this.repository.delete(codigo);
  }
}

export { DisciplinasRepository };
