const routes = require('express').Router();
const authMidlleware = require('./app/middleware/auth');
const SessionController = require('./app/controllers/SessionController');

routes.post('/sessions', SessionController.store);

routes.use(authMidlleware);

routes.get('/dashboard', (req, res) => {
  return res.status(200).send();
});

module.exports = routes;
