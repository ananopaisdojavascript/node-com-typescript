export interface IUserDTO {
  id: number;
  name: string;
  email: string;
  password: string;
}

export class Users {
  id!: number;
  name!: string;
  email!: string;
  password!: string;
}
