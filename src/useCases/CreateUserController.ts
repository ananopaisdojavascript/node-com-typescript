import { Request, Response } from "express";
import { IUserDTO } from "../entities/Users";
import { RegisterUserUseCase } from "./RegisterUserUseCase";

export class CreateUserController {
  constructor(private useCase: RegisterUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password }: IUserDTO = request.body;
    await this.useCase.execute({ name, email, password } as IUserDTO);

    return response
      .status(201)
      .json({ message: "Usuário criado com sucesso!" });
  }
}
