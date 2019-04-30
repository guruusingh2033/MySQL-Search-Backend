const router = require('express').Router();
const device_controller = require('.././controllers/devices.js');
var connection = require('../db.js');

router.post('/getdeviceidbyorganization', function (req, res) {
    // console.log(req.body);
    device_controller.getDeviceIdByOrganization(req.body, connection).then(function (response) {
        console.log(response)
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