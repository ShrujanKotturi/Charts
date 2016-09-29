var connection = require('./sql');

function User() {

    this.get = function (res) {
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

    this.post = function (point, res){
        connection.acquire(function (err, con) {
            var sql = 'update data set ? where id = ?' + [point, point.id];
            console.log("SQL : " + sql);
            con.query(sql, function (err, result) {
                con.release();
                if(err){
                    res.send({'status':'Error', 'message' : 'Unable to store new value'});
                    console.error(err);
                    return;
                }
                if(result.length != 0){
                    res.send({'status' : 'Success'});
                }
                else{
                    res.send({'status' : 'No Result'});
                }
            });

        });
    };
}
module.exports = new User();



