import csvParse from "csv-parse";
import fs from "fs";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { ISemestresRepository } from "../../../estrutura/infra/typeorm/repositories/interfaces/ISemestresRepository";
import { IPatchFilaTurmaNewDTO } from "../../dtos/ICreateFilaTurmaNewDTO";
import { FilaTurmaNew } from "../../infra/typeorm/entities/FilaTurmaNew";
import { IFilaTurmaNewRepository } from "../../infra/typeorm/repositories/interfaces/IFilaTurmaNewRepository";

interface IHandleFilaTurmaNew {
  id_turma: number;
  id_fila: number;
  prioridade: number;
}

@injectable()
class HandleFilaTurmaNewService {
  constructor(
    @inject("FilaTurmaNewRepository")
    private filaRepository: IFilaTurmaNewRepository,
    @inject("SemestresRepository")
    private semestresRepository: ISemestresRepository
  ) {}

  async create({
    id_turma,
    id_fila,
    prioridade,
  }: IHandleFilaTurmaNew): Promise<FilaTurmaNew> {
    const filaFounded = await this.filaRepository.queryByTurmaEFila(
      id_turma,
      id_fila
    );

    if (filaFounded) {
      throw new AppError("Fila já cadastrada!");
    }

    const fila = await this.filaRepository.create({
      id_turma,
      id_fila,
      prioridade,
    });

    return fila;
  }

  async read(): Promise<FilaTurmaNew[]> {
    return this.filaRepository.listFilas();
  }

  async readByProfessorAndSemestreId(
    siape: string,
    semestreId: number
  ): Promise<FilaTurmaNew[]> {
    const { ano, semestre } = await this.semestresRepository.queryById(
      semestreId
    );
    return this.filaRepository.readByProfessorAndSemestre(siape, semestre, ano);
  }

  async readByTurma(id_turma: number): Promise<FilaTurmaNew[]> {
    const filas = await this.filaRepository.queryByTurma(id_turma);

    return filas;
  }

  async update({
    id_turma,
    id_fila,
    prioridade,
  }: IPatchFilaTurmaNewDTO): Promise<FilaTurmaNew> {
    const filaFounded = await this.filaRepository.queryByTurmaEFila(
      id_turma,
      id_fila
    );

    if (!filaFounded) {
      throw new AppError("Fila não encontrada!");
    }

    const filaToUpdate = await this.filaRepository.updateByTurmaEFila({
      id_turma,
      id_fila,
      prioridade,
    });

    return filaToUpdate;
  }

  async delete(id_turma: number, id_fila: number): Promise<void> {
    await this.filaRepository.deleteByTurmaEFila(id_turma, id_fila);
  }

  async import(file: Express.Multer.File): Promise<void> {
    const filas = await this.loadFilas(file);

    filas.map(async (fila) => {
      const { id_turma, id_fila, prioridade } = fila;

      console.log(fila);

      await this.filaRepository.create({
        id_turma,
        id_fila,
        prioridade,
      });
    });
  }

  private loadFilas(file: Express.Multer.File): Promise<IHandleFilaTurmaNew[]> {
    return new Promise((resolve, reject) => {
      const filas: IHandleFilaTurmaNew[] = [];

      const stream = fs.createReadStream(file.path);

      const parseFile = csvParse();

      stream.pipe(parseFile);

      parseFile
        .on("data", async (line) => {
          const [id_turma, id_fila, prioridade] = line;

          filas.push({
            id_turma: parseInt(id_turma, 10),
            id_fila: parseInt(id_fila, 10),
            prioridade: parseInt(prioridade, 10),
          });
        })
        .on("end", () => {
          fs.promises.unlink(file.path);
          resolve(filas);
        })
        .on("error", (err) => {
          reject(err);
        });
    });
  }
}

export { HandleFilaTurmaNewService };
