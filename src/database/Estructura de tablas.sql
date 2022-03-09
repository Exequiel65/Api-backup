drop database banco_saint_patrick_db;

CREATE DATABASE IF NOT EXISTS banco_saint_patrick_db;

USE banco_saint_patrick_db;

CREATE TABLE IF NOT EXISTS accounts(
	id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nro_account BIGINT UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS cards(
	id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nro_card BIGINT(16) UNIQUE NOT NULL,
    name VARCHAR(50) NOT NULL,
    cci INT(3) NOT NULL,
    due_date DATE NOT NULL,
    cod VARCHAR(50) NOT NULL,
    pin INT(4) NOT NULL,
    id_account INT UNSIGNED,
    FOREIGN KEY(id_account) REFERENCES accounts(id)
);

create table IF NOT EXISTS users (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    surname VARCHAR(50) NOT NULL,
    dni BIGINT UNIQUE NOT NULL,
    user_name VARCHAR(50) NOT NULL,
    password VARCHAR(12),
    email VARCHAR(50) UNIQUE NOT NULL,
    id_account INT UNSIGNED,
    FOREIGN KEY(id_account) REFERENCES accounts(id)
);

