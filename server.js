const express = require('express');
const db = require('./config/connection');
const app = express();
const routes = require('./controllers/routes')
const PORT = process.env.port || 3001;
const {User} = require('./models')



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);


db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});

