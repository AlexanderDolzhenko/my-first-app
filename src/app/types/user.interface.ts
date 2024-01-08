export interface IAuthService {
  email: string;
  password: string;
}

export interface IUser {
  id: number;
  email: string;
  token: string
}
