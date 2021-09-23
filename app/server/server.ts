import express from 'express';
import bodyParser from 'body-parser';
import UserRoute from './route/userRoute';
import ScheduleRoute from './route/scheduleRoute';
const app = express()

app.use(bodyParser.json({type: 'application/*+json'}))
app.use('/user', UserRoute);
app.use('/schedule', ScheduleRoute);


app.listen(process.env.PORT || 3000)