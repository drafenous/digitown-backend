import bcrypt from "bcrypt";
import { User } from "../../../types";
import database from "../infra/database";

export default class UserData {
  public async getUser(email: string, password: string): Promise<User | void> {
    const query = `select * from public.users where email = '${email}'`;
    return await database.query(query).then((users: User[]) =>
      users.find(async (user) => {
        return await bcrypt.compare(password, user.passwordHash);
      })
    );
  }

  public async createUser({fullName, email, passwordHash: password}: User): Promise<User | void> {
    const hash = bcrypt.hash(password, 10);
    const query = `INSERT INTO public.users(
      "fullName", email, "passwordHash")
      VALUES ('${fullName}', '${email}', '${hash}');`;
      return await database.query(query)
  }
}
