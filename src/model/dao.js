const service = require('./service');
const mysql = require("mysql");


module.exports.getProducts = (category) => {

    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
        database: "ptech"
    });
    let sql = 'SELECT P.ID, P.NAME, P.DESCRIPTION FROM CS_PRODUCTS P JOIN CS_CATEGORY_PRD CP ON CP.PRODUCT_ID = P.ID WHERE CP.CATEGORY=?';
    let products;
    connection.query(sql, [category], (error, results, fields) => {
        products = JSON.stringify(results); 
        if (error) {
            return console.error(error.message);
        }
    });

    console.log('Found products:',products);

    return products;

    connection.end();

}


module.exports.getSkus = (productId) => {
        console.log('Get skus for product',productId);

        // connection.end();
}

