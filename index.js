const express = require('express');
const bodyParser = require('body-parser');
const PORT = '3000'; 
const registerValidation  = require('./middlewares/registerValidation');
const crypto = require('crypto');

const app = express();

app.use(bodyParser.json());

app.get('/index', (req, res) => {
  return res.status(200).send({message: "App funcioonando!"});
})

app.post('/user/register',
registerValidation.userNameValid,
registerValidation.emailValid,
registerValidation.passwordValid, (req, res) => {
  return res.status(201).send({ message: "user created" });
})

app.post('/user/login',
registerValidation.emailValid,
registerValidation.passwordValid, (req, res) => {
  const token = crypto.randomBytes(8).toString('hex');
  return res.status(201).send({ token });
})

app.listen(PORT, () => {
  console.log('Online');
  }); 
