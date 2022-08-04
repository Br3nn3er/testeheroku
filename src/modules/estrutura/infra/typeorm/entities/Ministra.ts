import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";

import { Professor } from "./Professor";
import { Turma } from "./Turma";

@Entity("ministra")
class Ministra {
  @ManyToOne(() => Professor)
  @JoinColumn({ name: "siape" })
  professor: Professor;

  @PrimaryColumn()
  siape: string;

  @ManyToOne(() => Turma)
  @JoinColumn({ name: "id_turma" })
  turma: Turma;

  @PrimaryColumn()
  id_turma: string;

  @CreateDateColumn()
  created_at: Date;
}

export { Ministra };
