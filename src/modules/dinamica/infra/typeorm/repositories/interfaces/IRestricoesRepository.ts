import { ICreateRestricoesDTO } from "../../../../dtos/ICreateRestricoesDTO";
import { Restricoes } from "../../entities/Restricoes";

interface IRestricoesRepository {
  create(data: ICreateRestricoesDTO): Promise<Restricoes>;
  listRestricoes(): Promise<Restricoes[]>;
  queryBySiapeEDiaELetra(
    siape: string,
    dia: string,
    letra: string
  ): Promise<Restricoes>;
  queryBySiape(siape: string): Promise<Restricoes[]>;
  deleteBySiapeEDiaELetra(
    siape: string,
    dia: string,
    letra: string
  ): Promise<void>;
}

export { IRestricoesRepository };
