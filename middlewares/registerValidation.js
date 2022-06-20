function userNameValid(req, res, next) {
  const {username} = req.body;
  if (username.length < 4) {
    return res.status(400).send({ message: "invalid data (username)." });
  }
  next();
}

function emailValid(req, res, next) {
  const {email} = req.body;
  if (!email.includes('@') || !email.includes('.com')) {
    return res.status(400).send({ message: "invalid data (email)." });
  }
  next();
}

function passwordValid(req, res, next) {
  const {password} = req.body;
  if ((password.length < 3 || password.length > 8)) {
    return res.status(400).send({ message: "invalid data (password characters)." });
  }

  if ((typeof(password) !== 'number')) {
    return res.status(400).send({ message: "invalid data (password typeof)." });
  }
  next();
}

module.exports = {
  userNameValid,
  emailValid,
  passwordValid
}



