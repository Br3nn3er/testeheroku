import {inject, injectable} from "tsyringe";

import {AppError} from "../../../../shared/errors/AppError";
import {IPatchFilaTurmaDTO} from "../../dtos/ICreateFilaTurmaDTO";
import {FilaTurma} from "../../infra/typeorm/entities/FilaTurma";
import {IFilaTurmaRepository} from "../../infra/typeorm/repositories/interfaces/IFilaTurmaRepository";

interface IHandleFilaTurma {
  siape: string;
  id_turma: number;
  codigo_disc: string;
  turma: string;
  pos: number;
  prioridade: number;
  qte_ministrada: number;
  qte_maximo: number;
  status: number;
  ch: number;
  id: number;
  periodo_preferencial: boolean;
}

@injectable()
class HandleFilaTurmaService {
  constructor(
    @inject("FilaTurmaRepository")
    private filaTurmaRepository: IFilaTurmaRepository
  ) {}

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
  }: IHandleFilaTurma): Promise<FilaTurma> {
    
    const filaTurma = await this.filaTurmaRepository.create({
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

    return filaTurma;
  }

  async read(): Promise<FilaTurma[]> {
    return await this.filaTurmaRepository.listFilas();
  }

  async readByProfessor(
    siape: string
  ): Promise<FilaTurma[]> {
    const filas = await this.filaTurmaRepository.queryBySiape(siape);
    return filas
  }

  async readByTurma(
    id_turma: number
  ): Promise<FilaTurma[]> {
    const filas = await this.filaTurmaRepository.queryByTurma(id_turma);
    return filas
  }


  async update({
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
    const filaFounded = await this.filaTurmaRepository.queryById(id);

    if (!filaFounded) {
      throw new AppError("Fila não encontrada!");
    }

    return await this.filaTurmaRepository.updateById({
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
  }

  async delete(id: number): Promise<void> {
    await this.filaTurmaRepository.deleteById(id);
  }
}

export { HandleFilaTurmaService };
