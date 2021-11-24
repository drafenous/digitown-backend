import { Request, Response } from "express";
import UserEnterpriseData from "../data/userEnterpriseData";

export default class UserEnterpriseService {
  private db = new UserEnterpriseData();
  public async login(req: Request, res: Response) {
    const { email, password } = req.query;
    if (email && password) {
      const data = await this.db.getUser(email as string, password as string);
      if (data) {
        return res.json({ ...data });
      }
      return res.status(404).send("Not found");
    }
    return res.status(404).send("Not found");
  }

  public async create(req: Request, res: Response) {
    const { fullName, email, password, enterpriseId } = req.body;
    if (fullName && email && password && enterpriseId) {
      const params = {fullName: String(fullName), email: String(email), passwordHash: String(password), enterpriseId: enterpriseId};
      const data = await this.db.createUser(params);
      if (data) {
        return res.json({ ...data });
      }
      return res.status(500).send("Create user error");
    }
    return res.status(504).send("Create user error");
  }
}
