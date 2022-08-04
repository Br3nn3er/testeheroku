import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

import { Disciplina } from "./Disciplina";

@Entity("turma")
class Turma {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => Disciplina)
  @JoinColumn({ name: "codigo_disc" })
  disciplina: Disciplina;

  @Column()
  codigo_disc: string;

  @Column()
  turma: string;

  @Column()
  ch: number;

  @Column()
  ano: number;

  @Column()
  semestre: number;

  @CreateDateColumn()
  created_at: Date;
}

export { Turma };
