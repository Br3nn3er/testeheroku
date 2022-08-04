interface ICreateUsersDTO {
  id?: string;
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
}
interface IPatchUserDTO {
  id: string;
  name?: string;
  isAdmin?: boolean;
}

export { ICreateUsersDTO, IPatchUserDTO };
