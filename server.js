const express = require('express');
const { homeRepairs } = require('./data');
const { application } = require('express');
const app = express();

app.use(express.json())

app.locals.title = 'My Fix API'
app.locals.homeRepairs = homeRepairs;

app.set('port', '3000');
app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is now running on ${app.get('port')}!`)
})


app.get('api/v1/homeRepairs', (request, response) => {
  response.status(200).json(app.locals.homeRepairs)
});