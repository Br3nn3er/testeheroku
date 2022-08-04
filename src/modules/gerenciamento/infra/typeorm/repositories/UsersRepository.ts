import { getRepository, Repository } from "typeorm";

import {
  ICreateUsersDTO,
  IPatchUserDTO,
} from "../../../dtos/ICreateUpdateUsersDTO";
import { User } from "../entities/User";
import { IUsersRepository } from "./interfaces/IUsersRepository";

class UsersRepository implements IUsersRepository {
  private usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = getRepository(User);
  }

  createUser({
    name,
    email,
    password,
    id,
    isAdmin,
  }: ICreateUsersDTO): Promise<User> {
    const user = this.usersRepository.create({
      name,
      email,
      password,
      id,
      isAdmin,
    });

    return this.usersRepository.save(user);
  }

  queryByEmail(email: string): Promise<User> {
    return this.usersRepository.findOne({ email });
  }

  queryById(id: string): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  listUsers(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async deleteById(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async updateById({ id, name, isAdmin }: IPatchUserDTO): Promise<User> {
    const user = await this.usersRepository.findOne(id);

    user.name = name || user.name;
    user.isAdmin =
      isAdmin === null || isAdmin === undefined ? user.isAdmin : isAdmin;

    await this.usersRepository.save(user);

    return user;
  }
}

export { UsersRepository };
