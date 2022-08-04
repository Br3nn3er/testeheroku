import { getRepository, Repository } from "typeorm";

import {
  ICreateFilaTurmaNewDTO,
  IPatchFilaTurmaNewDTO,
} from "../../../dtos/ICreateFilaTurmaNewDTO";
import { FilaTurmaNew } from "../entities/FilaTurmaNew";
import { IFilaTurmaNewRepository } from "./interfaces/IFilaTurmaNewRepository";

class FilaTurmaNewRepository implements IFilaTurmaNewRepository {
  private repository: Repository<FilaTurmaNew>;

  constructor() {
    this.repository = getRepository(FilaTurmaNew);
  }

  async create({
    id_turma,
    id_fila,
    prioridade,
  }: ICreateFilaTurmaNewDTO): Promise<FilaTurmaNew> {
    const fila = this.repository.create({ id_turma, id_fila, prioridade });

    await this.repository.save(fila);

    return fila;
  }

  async listFilas(): Promise<FilaTurmaNew[]> {
    const filas = await this.repository
      .createQueryBuilder("fila_turma_new")
      .orderBy("id_turma")
      .getMany();

    return filas;
  }

  readByProfessorAndSemestre(
    siape: string,
    semestre: number,
    ano: number
  ): Promise<FilaTurmaNew[]> {
    return this.repository
      .createQueryBuilder("fila_turma_new")
      .innerJoinAndSelect("fila_turma_new.fila", "fila")
      .innerJoinAndSelect("fila.professor", "professor")
      .innerJoinAndSelect("fila.disciplina", "disciplina")
      .innerJoinAndSelect("disciplina.curso_disciplinas", "curso_disciplinas")
      .innerJoinAndSelect("fila_turma_new.turma", "turma")
      .where(
        "professor.siape = :siape AND fila.ano = :ano AND fila.semestre = :semestre",
        { ano, semestre, siape }
      )
      .orderBy("fila_turma_new.prioridade", "ASC")
      .getMany();
  }

  async queryByTurmaEFila(
    id_turma: number,
    id_fila: number
  ): Promise<FilaTurmaNew> {
    const filaFounded = await this.repository.findOne({
      where: { id_turma, id_fila },
    });

    return filaFounded;
  }

  async queryByTurma(id_turma: number): Promise<FilaTurmaNew[]> {
    return this.repository
      .createQueryBuilder("fila_turma_new")
      .innerJoinAndSelect("fila_turma_new.fila", "fila")
      .innerJoinAndSelect("fila.professor", "professor")
      .innerJoinAndSelect("fila.disciplina", "disciplina")
      .where("fila_turma_new.id_turma = :id_turma", { id_turma })
      .orderBy("fila.pos", "ASC")
      .getMany();
  }

  async updateByTurmaEFila({
    id_turma,
    id_fila,
    prioridade,
  }: IPatchFilaTurmaNewDTO): Promise<FilaTurmaNew> {
    await this.repository
      .createQueryBuilder()
      .update(FilaTurmaNew)
      .set({ prioridade })
      .where("id_turma = :id_turma", { id_turma })
      .andWhere("id_fila = :id_fila", { id_fila })
      .execute();

    const filaUpdated = await this.repository.findOne({
      where: { id_turma, id_fila },
    });

    return filaUpdated;
  }

  async deleteByTurmaEFila(id_turma: number, id_fila: number): Promise<void> {
    await this.repository
      .createQueryBuilder()
      .delete()
      .from(FilaTurmaNew)
      .where("id_turma = :id_turma", { id_turma })
      .andWhere("id_fila = :id_fila", { id_fila })
      .execute();
  }
}

export { FilaTurmaNewRepository };
