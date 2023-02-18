const express = require('express');
const { json } = require('express');
const cors = require('cors');
const UsersRoute = require('./3-routes/usersRoute');
const ActivitiesRoute = require('./3-routes/activitiesRoute');

const app = express();

app.use(json());
app.use(cors());

app.use(UsersRoute);
app.use(ActivitiesRoute);

app.listen(3040, () => {
    console.log('listetning');
})