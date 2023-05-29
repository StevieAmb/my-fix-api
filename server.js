const express = require('express');
const { homeRepairs } = require('./data');
const app = express();
const cors = require('cors');

app.use(express.json())
app.use(cors());

app.use((req, res, next) => {
  const allowedOrigins = ['http://127.0.0.1:8020', 'http://localhost:3000', 'http://127.0.0.1:9000', 'http://localhost:9000'];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
       res.setHeader('Access-Control-Allow-Origin', origin);
  }
  //res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8020');
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', true);
  return next();
});

app.set('port', process.env.PORT || 3001);
app.locals.title = 'My Fix API'

app.locals.homeRepairs = homeRepairs;

app.get('/', (response) => {
  response.set('Access-Control-Allow-Origin', '*');
  response.send(app.locals.homeRepairs)
  console.log(app.locals.homeRepairs)
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is now running on ${app.get('port')}!`)
})