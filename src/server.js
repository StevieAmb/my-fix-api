const express = require('express');
const { homeRepairs } = require('./data');
const app = express();
const cors = require('cors');

app.use(express.json())
app.use(cors({
  origin: '*'
}));

app.set('port', process.env.PORT || 3001);
app.locals.title = 'My Fix API'

app.locals.homeRepairs = homeRepairs;

app.get("/", async (request, response) => {
  response.send(app.locals.homeRepairs)
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is now running on ${app.get('port')}!`)
})