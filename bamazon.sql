DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products (
id INT NOT NULL AUTO_INCREMENT,
product VARCHAR(33) NOT NULL,
department VARCHAR(33) NOT NULL,
price DECIMAL(11,2) NOT NULL,
stock INT(33), 
PRIMARY KEY (id)
);

INSERT INTO products (product, department, price, stock)
VALUES ("Trevtendo Swartch", "Video Games", 333.47, 47);
INSERT INTO products (product, department, price, stock)
VALUES ("Kitten", "Pet", 47.22, 22);
INSERT INTO products (product, department, price, stock)
VALUES ("Dragon", "Pet", 11.11, 2222);
INSERT INTO products (product, department, price, stock)
VALUES ("XerxBerkz UNO", "Video Games", 444.11, 11);
INSERT INTO products (product, department, price, stock)
VALUES ("Surf Board", "Outdoors", 333.22, 11);
INSERT INTO products (product, department, price, stock)
VALUES ("Hammock", "Outdoors", 444.33, 22);
INSERT INTO products (product, department, price, stock)
VALUES ("Hammock Underquilt", "Outdoors", 555.44, 33);
INSERT INTO products (product, department, price, stock)
VALUES ("Fibonacci Fractals", "Universal Construction", 0.47, 1123581321);
INSERT INTO products (product, department, price, stock)
VALUES ("Xanon Clark X", "Cameras", 3333.22, 47);
INSERT INTO products (product, department, price, stock)
VALUES ("Neekon B8000", "Cameras", 444.22, 333);
INSERT INTO products (product, department, price, stock)
VALUES ("Zony Mirrorless 8rs", "Cameras", 5555.55, 42);

SELECT * FROM products;
