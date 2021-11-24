import { Schedule } from "../../../types";
import database from "../infra/database";

export default class DashboardData {
  public async getTodayPending(companyName: string): Promise<Schedule | void> {
    var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    const query = `select * from public."schedule" WHERE "companyName" LIKE '%${companyName}%' AND "status" = '0' AND datetime LIKE '${utc}%'`;
    return await database.query(query);
  }

  public async getTodayEntrance(companyName: string): Promise<Schedule | void> {
    var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    const query = `select * from public."schedule" WHERE "companyName" LIKE '%${companyName}%' AND "status" = '1' AND datetime LIKE '${utc}%'`;
    return await database.query(query);
  }

  public async getTodaySchedule(companyName: string): Promise<Schedule | void> {
    var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    const query = `select * from public."schedule" WHERE "companyName" LIKE '%${companyName}%' AND datetime LIKE '${utc}%'`;
    return await database.query(query);
  }
}
