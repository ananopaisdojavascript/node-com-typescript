import { IUserDTO } from "../entities/Users";
import { IUsersRepository } from "../repositories/IUsersRepository";

export class RegisterUserUseCase {
  constructor(private userRepository: IUsersRepository) {}

  async execute({ name, email, password }: IUserDTO): Promise<void> {
    await this.userRepository.create({ name, email, password } as IUserDTO);
  }
}
