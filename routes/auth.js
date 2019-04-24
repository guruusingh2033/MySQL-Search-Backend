const router = require('express').Router();
const Joi = require('joi');
const validator = require('express-joi-validation')({ passError: true });
var joi_options = { joi: { convert: true, allowUnknown: true } }
var connection = require('../db.js');
var md5 = require('md5');

//validating input
const login_schema = Joi.object({
  organization: Joi.string().required(),
  username: Joi.string().required(),
  password: Joi.string().required(),  
});

//logging user in
router.post('/login', validator.body(login_schema, joi_options), function (req, res) {
  
  var encryptedPassword = md5(req.body.password);
  var fetch = "SELECT * FROM orgs WHERE org = '" + req.body.organization + "' AND username = '" + req.body.username + "' AND password_md5_encr = '" + encryptedPassword + '\r\n' + "'";
  connection.query(fetch, function (error, results) {
    if (error) return null;
    else {
      res.json(results)
    }
  })
})
module.exports = router