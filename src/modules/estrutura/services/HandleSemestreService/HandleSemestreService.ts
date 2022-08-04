import csvParse from "csv-parse";
import fs from "fs";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { IPatchSemestreDTO } from "../../dtos/ICreateUpdateSemestreDTO";
import { Semestre } from "../../infra/typeorm/entities/Semestre";
import { ISemestresRepository } from "../../infra/typeorm/repositories/interfaces/ISemestresRepository";

interface IRequest {
  ano: number;
  semestre: number;
  status: boolean;
}

interface IImportSemestre {
  ano: number;
  semestre: number;
  status: boolean;
}

@injectable()
class HandleSemestreService {
  constructor(
    @inject("SemestresRepository")
    private semestresRepository: ISemestresRepository
  ) {}

  async create({ ano, semestre, status }: IRequest): Promise<Semestre> {
    const foundedSemestre = await this.semestresRepository.queryByAnoSemestre(
      ano,
      semestre
    );

    if (foundedSemestre) {
      throw new AppError("Já existe um ano com este semestre!");
    }

    const semestreToCreate = await this.semestresRepository.createSemestre({
      ano,
      semestre,
      status,
    });

    return semestreToCreate;
  }

  async read(): Promise<Semestre[]> {
    const semestres = await this.semestresRepository.listAllSemestres();

    return semestres;
  }

  readById(id: number): Promise<Semestre> {
    return this.semestresRepository.queryById(id);
  }

  async update({
    id,
    ano,
    semestre,
    status,
  }: IPatchSemestreDTO): Promise<Semestre> {
    const foundedSemestre = await this.semestresRepository.queryById(id);

    if (!foundedSemestre) {
      throw new AppError("Registro não consta no sistema!");
    }

    const semestreToCreate = await this.semestresRepository.updateById({
      id,
      ano,
      semestre,
      status,
    });

    return semestreToCreate;
  }

  async delete(id: number): Promise<void> {
    await this.semestresRepository.deleteById(id);
  }

  async import(file: Express.Multer.File): Promise<void> {
    const semestres = await this.loadSemestres(file);

    semestres.map(async (semestreToImport) => {
      const { ano, semestre, status } = semestreToImport;

      const foundedSemestre = await this.semestresRepository.queryByAnoSemestre(
        ano,
        semestre
      );

      if (!foundedSemestre) {
        await this.semestresRepository.createSemestre({
          ano,
          semestre,
          status,
        });
      }
    });
  }

  private loadSemestres(file: Express.Multer.File): Promise<IImportSemestre[]> {
    return new Promise((resolve, reject) => {
      const semestres: IImportSemestre[] = [];

      const stream = fs.createReadStream(file.path);

      const parseFile = csvParse();

      stream.pipe(parseFile);

      parseFile
        .on("data", async (line) => {
          const [ano, semestre, status] = line;

          semestres.push({
            ano,
            semestre,
            status: status.toLowerCase() === "true",
          });
        })
        .on("end", () => {
          fs.promises.unlink(file.path);
          resolve(semestres);
        })
        .on("error", (err) => {
          reject(err);
        });
    });
  }
}

export { HandleSemestreService };
