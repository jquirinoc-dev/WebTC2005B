var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "yM9539Hm+-qwertyjonathan456123",
    database: "production"
});

connection.connect();

connection.query('SELECT * from brands WHERE brand_id = 1', function(error, results, fields){
    if (error) throw error;
    console.log('The solution is: ', results[0]);
})

connection.end();