import { getRepository, Repository } from "typeorm";

import {
  ICreateTurmaDTO,
  IPatchTurmaDTO,
} from "../../../dtos/ICreateUpdateTurmaDTO";
import { Turma } from "../entities/Turma";
import { ITurmasRepository } from "./interfaces/ITurmasRepository";

class TurmasRepository implements ITurmasRepository {
  private repository: Repository<Turma>;

  constructor() {
    this.repository = getRepository(Turma);
  }

  async createTurma({
    codigo_disc,
    turma,
    ch,
    ano,
    semestre,
  }: ICreateTurmaDTO): Promise<Turma> {
    const turmaToCreate = await this.repository.create({
      codigo_disc,
      turma,
      ch,
      ano,
      semestre,
    });

    await this.repository.save(turmaToCreate);

    return turmaToCreate;
  }

  async listAllTurmas(): Promise<Turma[]> {
    const turmas = await this.repository
      .createQueryBuilder("turma")
      .orderBy("codigo_disc", "ASC")
      .getMany();

    return turmas;
  }

  async queryByAnoESemestre(year: number, semester: number): Promise<Turma[]> {
    const turmas = await this.repository
      .createQueryBuilder("turma")
      .innerJoinAndSelect("turma.disciplina", "disciplina")
      .where("ano = :year AND semestre = :semester", { semester, year })
      .orderBy("codigo_disc", "ASC")
      .getMany();

    return turmas;
  }

  async queryById(id: string): Promise<Turma> {
    const turma = await this.repository.findOne(id);

    return turma;
  }

  async queryByCodigo(codigo_disc: string): Promise<Turma> {
    const turma = await this.repository.findOne({ codigo_disc });

    return turma;
  }

  async queryByCodigoTurmaAnoSemestre(
    codigo: string,
    turma: string,
    ano: number,
    semestre: number
  ): Promise<Turma> {
    const foundedTurma = await this.repository.findOne({
      where: { codigo_disc: codigo, turma, ano, semestre },
    });

    return foundedTurma;
  }

  async updateById({
    id,
    codigo_disc,
    turma,
    ch,
    ano,
    semestre,
  }: IPatchTurmaDTO): Promise<Turma> {
    const turmaToUpdate = await this.repository.findOne({ id });

    turmaToUpdate.codigo_disc = codigo_disc || turmaToUpdate.codigo_disc;
    turmaToUpdate.turma = turma || turmaToUpdate.turma;
    turmaToUpdate.ch = ch || turmaToUpdate.ch;
    turmaToUpdate.ano = ano || turmaToUpdate.ano;
    turmaToUpdate.semestre = semestre || turmaToUpdate.semestre;

    await this.repository.save(turmaToUpdate);

    return turmaToUpdate;
  }

  async deleteById(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}

export { TurmasRepository };
