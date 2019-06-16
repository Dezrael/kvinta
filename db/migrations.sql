CREATE TABLE messages
(
    id TINYINT(3) unsigned PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    message TEXT
);

CREATE TABLE regions
(
    id INT(10) unsigned PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    code VARCHAR(10),
    data TEXT,
    area INT(10) unsigned,
    density DOUBLE UNSIGNED,
    population INT(10) unsigned,
    city VARCHAR(100)
);

CREATE TABLE users
(
    id SMALLINT(5) unsigned PRIMARY KEY NOT NULL AUTO_INCREMENT,
    login VARCHAR(45) NOT NULL,
    email VARCHAR(100) NOT NULL,
    role VARCHAR(45) DEFAULT 'admin' NOT NULL,
    password CHAR(32) NOT NULL,
    is_active TINYINT(1) unsigned DEFAULT '1' NOT NULL
);

-- admin login: root 123
INSERT INTO users(login, email, role, password, is_active) VALUES ('root', 'kvinta@admin.com', 'admin', 'f65c7d0a654c3e120fc3c600a791c621', 1);