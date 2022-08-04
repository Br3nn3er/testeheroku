import { getRepository, Repository } from "typeorm";

import {
  ICreateHorarioDTO,
  IPatchHorarioDTO,
} from "../../../dtos/ICreateUpdateHorarioDTO";
import { Horario } from "../entities/Horario";
import { IHorariosRepository } from "./interfaces/IHorariosRepository";

class HorariosRepository implements IHorariosRepository {
  private repository: Repository<Horario>;

  constructor() {
    this.repository = getRepository(Horario);
  }

  async createHorario({
    letra,
    hora_inicio,
    hora_fim,
    turno,
  }: ICreateHorarioDTO): Promise<Horario> {
    const horario = await this.repository.create({
      letra,
      hora_inicio,
      hora_fim,
      turno,
    });

    await this.repository.save(horario);

    return horario;
  }

  async queryByLetra(letra: string): Promise<Horario> {
    const horario = await this.repository.findOne({ letra });

    return horario;
  }

  async listAllHorarios(): Promise<Horario[]> {
    const horarios = await this.repository
      .createQueryBuilder("horario")
      .orderBy("letra", "ASC")
      .getMany();

    return horarios;
  }

  async updateHorarioByLetra({
    letra,
    hora_inicio,
    hora_fim,
    turno,
  }: IPatchHorarioDTO): Promise<Horario> {
    const horarioToUpdate = await this.repository.findOne({ letra });

    horarioToUpdate.hora_inicio = hora_inicio || horarioToUpdate.hora_inicio;
    horarioToUpdate.hora_fim = hora_fim || horarioToUpdate.hora_fim;
    horarioToUpdate.turno = turno || horarioToUpdate.turno;

    await this.repository.save(horarioToUpdate);

    return horarioToUpdate;
  }

  async deleteByLetra(letra: string): Promise<void> {
    await this.repository.delete(letra);
  }
}

export { HorariosRepository };
