const express = require('express');
const { homeRepairs } = require('./data');
const app = express();
const cors = require('cors');

app.use(express.json())
app.use(cors({
  origin: 'http://localhost:3000/'
}));

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