import { Schedule } from "../../types";
import database from "../infra/database";

export default class ScheduleData {
  public async getSchedules(userId: string): Promise<Schedule | void> {
    const query = `select * from public.schedule where "userId" = '${userId}'`;
    return await database.query(query);
  }

  public async createSchedule({
    companyName,
    datetime,
    userId
    }: Schedule): Promise<Schedule | void> {
    const query = `INSERT INTO public.schedule(
      "companyName", datetime, "userId")
      VALUES ('${companyName}', '${datetime}', '${userId}');`;
    await database.query(query)

    const responseQuery = `select * from public.schedule where "companyName" = '${companyName}' AND datetime = '${datetime}' and "userId" = ${userId}`
    return database.query(responseQuery)
  }
}
