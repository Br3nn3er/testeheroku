import { ICreateMinistraDTO } from "../../../../dtos/ICreateMinistraDTO";
import { Ministra } from "../../entities/Ministra";

interface IMinistraRepository {
  create(data: ICreateMinistraDTO): Promise<Ministra>;
  listAllMinistra(): Promise<Ministra[]>;
  queryBySiapeAndIdTurma(siape: string, id_turma: string): Promise<Ministra>;
  deleteBySiapeAndIdTurma(siape: string, id_turma: string): Promise<void>;
}

export { IMinistraRepository };
