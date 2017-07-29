CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers (
	id INTEGER(100) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	burger_name VARCHAR(100) NOT NULL,
	devoured BOOLEAN NOT NULL,
    date_time TIMESTAMP NOT NULL
);

INSERT INTO burgers (burger_name, devoured)
VALUES ("cheesy jack", true), ("bean burger", true), ("double cheese burger", true), ("patty melt", false), ("bison burger", false), ("elk burger", false);