// const _ = require('underscore');
// var config = require('../config/config.js');

module.exports = {
    getDeviceIdByOrganization
}

function getDeviceIdByOrganization(body, connection) {

    return new Promise(function (resolve, reject) {
        var fetch = "SELECT devID FROM devices WHERE org = '" + body.organization + "'"
        connection.query(fetch, function (error, results) {

            var deviceData = results
            if (results.length != 0) {
                resolve(deviceData);
            }
            else {
                reject({ "error": "No data for this organization" });
            }
        });
    })
    
}