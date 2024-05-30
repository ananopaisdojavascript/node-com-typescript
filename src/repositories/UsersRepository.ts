import { IUserDTO } from "../entities/Users";
import { IUsersRepository } from "./IUsersRepository";
import { prisma } from "../../prisma/migrations/prismaClient";

export class UsersRepository implements IUsersRepository {
  async create({ name, email, password }: IUserDTO): Promise<void> {
    await prisma.users.create({
      data: {
        name,
        email,
        password,
      },
    });
  }
}
