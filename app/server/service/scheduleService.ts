import { Request, Response } from "express";
import { Schedule } from "../../../types";
import ScheduleData from "../data/scheduleData";

export default class ScheduleService {
  private db = new ScheduleData();
  public async list(req: Request, res: Response) {
    const { userId } = req.query;
    if (userId) {
      const data = await this.db.getSchedules(userId as string);
      if (data) {
        return res.json({ ...data });
      }
      return res.status(404).send("Not found");
    }
    return res.status(404).send("Not found");
  }

  public async create(req: Request, res: Response) {
    const { userId, companyName, datetime } = req.body.params as Schedule;
    if (userId && companyName && datetime) {
      const params: Schedule = {userId: Number(userId), companyName: String(companyName), datetime: String(datetime)};
      const data = await this.db.createSchedule(params);
      if (data) {
        return res.json({ ...data });
      }
      return res.status(500).send("Create schedule error");
    }
    return res.status(504).send("Create schedule error");
  }
}
