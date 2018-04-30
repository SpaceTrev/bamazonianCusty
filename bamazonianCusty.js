const inquirer = require('inquirer');
const mysql = require("mysql");
const prompt = require("prompt");
let mew;
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "bamazon_db"
});
function readProducts() {
    console.log("Selecting all products...\n");
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        for (let i = 0; i < res.length; i++) {
            console.log("id: " + res[i].id + " | " + "product: " + res[i].product + " | " + "department: " + res[i].department + " | " + "price: " + res[i].price + " | " + "stock: " + res[i].stock);
        }

    }), setTimeout(promptFunc, 1000)

}
function promptFunc() {
    connection.query("SELECT * FROM products", function (err, res) {
        inquirer.prompt({
            type: "input",
            name: "ID",
            message: "What is the ID of the product you'd like to buy??",
        }).then(function (inquirerResponse) {
            mew = inquirerResponse.ID;
            if (inquirerResponse.ID <= 11) {
                q2();
            }
            else {
                console.log("Invalid number");
                setTimeout(promptFunc, 1000);
            }

        })
    })
};
function q2() {
    connection.query("SELECT * FROM products WHERE ?",
        {
            id: mew
        },
        function (err, res) {
            console.log(res[0].id);
            inquirer.prompt({
                type: "input",
                name: "Units",
                message: "How many Units would you like to purchase",
            }).then(function (inqRes) {
                let updatedStock = res[0].stock - inqRes.Units;
                let orderPrice = inqRes.Units * res[0].price;
                if (inqRes.Units <= res[0].stock) {
                    connection.query("UPDATE products SET ? WHERE ?", [
                        {
                            stock: updatedStock
                        },
                        {
                            id: mew
                        }])
                    console.log("Your Total Is: " + orderPrice);
                    connection.end();
                } else {
                    console.log("not enough stock");
                    setTimeout(q2, 1000);
                }
            })
        })
};
readProducts();