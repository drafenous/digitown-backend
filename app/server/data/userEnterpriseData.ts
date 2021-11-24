import bcrypt from "bcrypt";
import { UserEnterprise } from "../../../types";
import database from "../infra/database";

export default class UserEnterpriseData {
  public async getUser(email: string, password: string): Promise<UserEnterprise | void> {
    const query = `select * from public."enterpriseUsers" where email = '${email}'`;
    return await database.query(query).then((users: UserEnterprise[]) =>
      users.find(async (user) => {
        return await bcrypt.compare(password, user.passwordHash);
      })
    );
  }

  public async createUser({fullName, email, passwordHash: password, enterpriseId}: UserEnterprise): Promise<UserEnterprise | void> {
    const hash = await bcrypt.hash(password, 10);
    const query = `INSERT INTO public."enterpriseUsers"(
      "fullName", email, "passwordHash", "enterpriseId")
      VALUES ('${fullName}', '${email}', '${hash}', '${enterpriseId}');`;
      return await database.query(query)
  }
}
