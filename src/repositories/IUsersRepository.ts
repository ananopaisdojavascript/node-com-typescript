import { IUserDTO } from "../entities/Users";

export interface IUsersRepository {
  create(user: IUserDTO): Promise<void>;
}
