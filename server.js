const express = require('express');
const cors = require('cors');

const { homeRepairs } = require('./data');
const { application } = require('express');
const app = express();

app.use(express.json())

app.set('port', '8080');

app.locals.title = 'My Fix API'
app.locals.homeRepairs = homeRepairs;

app.get('api/v1/homeRepairs', (request, response) => {
  return response.json(app.locals.homeRepairs)
});