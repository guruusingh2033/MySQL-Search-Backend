module.exports = {
    getSourcesByDevId
}

function getSourcesByDevId(body, connection) {
    console.log(body.devID)
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