const router = require('express').Router();
const source_controller = require('.././controllers/sources.js');
var connection = require('../db.js');

router.post('/getsourcesbydevid', function (req, res) {
    console.log(req.body)
    source_controller.getSourcesByDevId(req.body, connection).then(function (response) {
        res.status(200).send(response)
    },
        function (err) {
            res.status(400).send(err)
        })
        .catch(function (exception) {
            res.status(400).send(exception)
        })
})

module.exports = router