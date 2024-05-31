import { UsersRepository } from "../repositories/UsersRepository";
import { CreateUserController } from "./CreateUserController";
import { RegisterUserUseCase } from "./RegisterUserUseCase";

export const registerUserFactory = () => {
  const userRepository = new UsersRepository();
  const registerUserUseCase = new RegisterUserUseCase(userRepository);
  const createUserController = new CreateUserController(registerUserUseCase);
  return createUserController;
};
