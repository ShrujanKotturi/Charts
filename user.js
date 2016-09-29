var connection = require('./sql');

function User() {

    this.all = function (log, res) {
        connection.acquire(function (err, con) {
            var sql = 'SELECT * FROM data';
            console.log("SQL : " + sql);
            con.query(sql, function (err, result) {
                con.release();
                if(err){
                    console.error(err);
                    return;
                }
                if(result.length != 0){
                    res.send(result);
                }
                else{
                    res.send({'status' : 'No Result'});
                }
            });

        });
    };
}
module.exports = new User();



