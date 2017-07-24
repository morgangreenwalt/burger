CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers (
	id INTEGER(100) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	burger_name VARCHAR(100) NOT NULL,
	devoured BOOLEAN NOT NULL,
    date_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO (burger_name, devoured)
VALUES ("cheesy jack", true);

INSERT INTO (burger_name, devoured)
VALUES ("bean burger", true);

INSERT INTO (burger_name, devoured)
VALUES ("double cheese burger", true);