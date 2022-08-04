import { inject, injectable } from "tsyringe";
import { getRepository, Repository } from "typeorm";

import { IDateProvider } from "../../../../../shared/container/providers/DateProvider/IDateProvider";
import {
  ICreateProfessoresDTO,
  IPatchProfessorDTO,
} from "../../../dtos/ICreateUpdateProfessoresDTO";
import { Professor } from "../entities/Professor";
import { IProfessoresRepository } from "./interfaces/IProfessoresRepository";

@injectable()
class ProfessoresRepository implements IProfessoresRepository {
  private repository: Repository<Professor>;

  constructor(
    @inject("DayjsDateProvider")
    private dateProvider: IDateProvider
  ) {
    this.repository = getRepository(Professor);
  }

  async queryBySiape(siape: string): Promise<Professor> {
    const professor = await this.repository.findOne({ siape });

    return professor;
  }

  async createProfessor({
    siape,
    nome,
    data_ingresso,
    data_nasc,
    afastado,
    regime,
    carga_atual,
    locacao,
    cnome,
    data_saida,
    data_exoneracao,
    data_aposentadoria,
    status,
  }: ICreateProfessoresDTO): Promise<Professor> {
    const professor = this.repository.create({
      siape,
      nome,
      data_ingresso,
      data_nasc,
      afastado,
      regime,
      carga_atual,
      locacao,
      cnome,
      data_saida,
      data_exoneracao,
      data_aposentadoria,
      status,
    });

    await this.repository.save(professor);

    return professor;
  }

  async listAllProfessores(): Promise<Professor[]> {
    const listProfessores = await this.repository
      .createQueryBuilder("professor")
      .orderBy("siape", "ASC")
      .getMany();

    return listProfessores;
  }

  async deleteBySiape(siape: string): Promise<void> {
    await this.repository.delete(siape);
  }

  async updateBySiape({
    siape,
    nome,
    data_ingresso,
    data_nasc,
    afastado,
    regime,
    carga_atual,
    locacao,
    cnome,
    data_saida,
    data_exoneracao,
    data_aposentadoria,
    status,
  }: IPatchProfessorDTO): Promise<Professor> {
    const professorToUpdate = await this.repository.findOne({ siape });

    professorToUpdate.nome = nome || professorToUpdate.nome;

    professorToUpdate.data_ingresso = data_ingresso
      ? this.dateProvider.processDateToUTC(data_ingresso)
      : professorToUpdate.data_ingresso;

    professorToUpdate.data_nasc = data_nasc
      ? this.dateProvider.processDateToUTC(data_nasc)
      : professorToUpdate.data_nasc;

    professorToUpdate.afastado =
      afastado === null || afastado === undefined
        ? professorToUpdate.afastado
        : afastado;

    professorToUpdate.regime = regime || professorToUpdate.regime;

    professorToUpdate.carga_atual =
      carga_atual || professorToUpdate.carga_atual;

    professorToUpdate.locacao = locacao || professorToUpdate.locacao;

    professorToUpdate.cnome = cnome || professorToUpdate.cnome;

    professorToUpdate.data_saida = data_saida
      ? this.dateProvider.processDateToUTC(data_saida)
      : professorToUpdate.data_saida;

    professorToUpdate.data_exoneracao = data_exoneracao
      ? this.dateProvider.processDateToUTC(data_exoneracao)
      : professorToUpdate.data_exoneracao;

    professorToUpdate.data_aposentadoria = data_aposentadoria
      ? this.dateProvider.processDateToUTC(data_aposentadoria)
      : professorToUpdate.data_aposentadoria;

    professorToUpdate.status = status || professorToUpdate.status;

    await this.repository.save(professorToUpdate);

    return professorToUpdate;
  }
}

export { ProfessoresRepository };
