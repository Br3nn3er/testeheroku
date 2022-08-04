import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

import { Horario } from "../../../../estrutura/infra/typeorm/entities/Horario";
import { Semana } from "../../../../estrutura/infra/typeorm/entities/Semana";
import { Turma } from "../../../../estrutura/infra/typeorm/entities/Turma";

@Entity("oferta")
class Oferta {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => Semana)
  @JoinColumn({ name: "dia" })
  semana: Semana;

  @Column()
  dia: string;

  @ManyToOne(() => Horario)
  @JoinColumn({ name: "letra" })
  horario: Horario;

  @Column()
  letra: string;

  @ManyToOne(() => Turma)
  @JoinColumn({ name: "id" })
  turma: Turma;

  @Column()
  id_turma: number;

  @CreateDateColumn()
  created_at: Date;
}

export { Oferta };
