import { getRepository, Repository } from "typeorm";

import { ICreateOfertaDTO } from "../../../dtos/ICreateOfertaDTO";
import { Oferta } from "../entities/Oferta";
import { IOfertaRepository } from "./interfaces/IOfertaRepository";

class OfertaRepository implements IOfertaRepository {
  private repository: Repository<Oferta>;

  constructor() {
    this.repository = getRepository(Oferta);
  }

  async create({ dia, letra, id_turma }: ICreateOfertaDTO): Promise<Oferta> {
    const oferta = this.repository.create({ dia, letra, id_turma });

    await this.repository.save(oferta);

    return oferta;
  }

  async listOfertas(): Promise<Oferta[]> {
    const ofertas = await this.repository
      .createQueryBuilder("oferta")
      .orderBy("id", "ASC")
      .getMany();

    return ofertas;
  }

  async queryById(id: string): Promise<Oferta> {
    const oferta = await this.repository.findOne(id);

    return oferta;
  }

  async queryByDiaELetraETurma(
    dia: string,
    letra: string,
    id_turma: number
  ): Promise<Oferta> {
    const oferta = await this.repository.findOne({
      where: { dia, letra, id_turma },
    });

    return oferta;
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}

export { OfertaRepository };
