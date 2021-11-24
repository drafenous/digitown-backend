import express from 'express';
import bodyParser from 'body-parser';
import UserRoute from './route/userRoute';
import UserEnterpriseRoute from './route/userEnterpriseRoute';
import ScheduleRoute from './route/scheduleRoute';
import DashboardRoute from './route/dashboardRoute';
import cors from 'cors';
const app = express()

app.use(cors());
app.use(bodyParser.json({type: 'application/*+json'}))
app.use('/user', UserRoute);
app.use('/userEnterprise', UserEnterpriseRoute);
app.use('/schedule', ScheduleRoute);
app.use('/dashboard', DashboardRoute);


app.listen(process.env.PORT || 3000)