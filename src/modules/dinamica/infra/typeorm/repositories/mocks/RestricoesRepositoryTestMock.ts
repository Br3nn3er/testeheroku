import { ICreateRestricoesDTO } from "../../../../dtos/ICreateRestricoesDTO";
import { Restricoes } from "../../entities/Restricoes";
import { IRestricoesRepository } from "../interfaces/IRestricoesRepository";

class RestricoesRepositoryTestMock implements IRestricoesRepository {
  private restricoesList: Restricoes[] = [];

  async create({
    siape,
    dia,
    letra,
  }: ICreateRestricoesDTO): Promise<Restricoes> {
    const restricoes = new Restricoes();

    Object.assign(restricoes, { siape, dia, letra });

    this.restricoesList.push(restricoes);

    return restricoes;
  }

  async listRestricoes(): Promise<Restricoes[]> {
    return this.restricoesList;
  }

  async queryBySiapeEDiaELetra(
    siape: string,
    dia: string,
    letra: string
  ): Promise<Restricoes> {
    const restricoes = this.restricoesList.find(
      (restricoesToSearch) =>
        restricoesToSearch.siape === siape &&
        restricoesToSearch.dia === dia &&
        restricoesToSearch.letra === letra
    );

    return restricoes;
  }

  async queryBySiape(siape: string): Promise<Restricoes[]> {
    const restricoes = this.restricoesList.filter(
      (restricoesToSearch) => restricoesToSearch.siape === siape
    );

    return restricoes;
  }

  async deleteBySiapeEDiaELetra(
    siape: string,
    dia: string,
    letra: string
  ): Promise<void> {
    const restricoesIndex = this.restricoesList.findIndex(
      (restricoesToSearch) =>
        restricoesToSearch.siape === siape &&
        restricoesToSearch.dia === dia &&
        restricoesToSearch.letra === letra
    );

    if (restricoesIndex > -1) {
      this.restricoesList.splice(restricoesIndex, 1);
    }
  }
}

export { RestricoesRepositoryTestMock };
