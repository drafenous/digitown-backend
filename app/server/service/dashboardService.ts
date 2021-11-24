import { Request, Response } from "express";
import { Schedule } from "../../../types";
import DashboardData from "../data/dashboardData";

export default class DashboardService {
  private db = new DashboardData();
  public async todayPending(req: Request, res: Response) {
    const { companyName } = req.query;
    if (companyName) {
      const data = await this.db.getTodayPending(companyName as string);
      if (data) {
        return res.json({ ...data });
      }
      return res.status(404).send("Not found");
    }
    return res.status(404).send("Not found");
  }

  public async todayEntrance(req: Request, res: Response) {
    const { companyName } = req.query;
    if (companyName) {
      const data = await this.db.getTodayEntrance(companyName as string);
      if (data) {
        return res.json({ ...data });
      }
      return res.status(404).send("Not found");
    }
    return res.status(404).send("Not found");
  }

  public async todaySchedule(req: Request, res: Response) {
    const { companyName } = req.query;
    if (companyName) {
      const data = await this.db.getTodaySchedule(companyName as string);
      if (data) {
        return res.json({ ...data });
      }
      return res.status(404).send("Not found");
    }
    return res.status(404).send("Not found");
  }
}
