module.exports = {
    getSourcesByDevId,
    getDataByTime
}

function getSourcesByDevId(body, connection) {
    return new Promise(function (resolve, reject) {
        var fetch = "SELECT * FROM messages WHERE devID = '" + body.devID + "'"
        connection.query(fetch, function (error, results) {
            var sourceData = results
            if (results.length != 0) {
                resolve(sourceData);
            }
            else {
                reject({ "error": "No source data available" });
            }
        });
    })
}

//getting data by time
function getDataByTime(body, connection) {
    return new Promise(function (resolve, reject) {
        var fetch = "SELECT * FROM messages WHERE datetime between '" + body.startDate + "' and '" + body.endDate + "' AND devID='" + body.devIdForSearch + "' AND source='" + body.sourceValue + "' AND message LIKE '%" + body.searchValue + "%'";
        connection.query(fetch, function (error, results) {
            var sourceData = results
            if (results.length != 0) {
                resolve(sourceData);
            }
            else {
                reject({ "error": "No source data available" });
            }
        });
    })



}