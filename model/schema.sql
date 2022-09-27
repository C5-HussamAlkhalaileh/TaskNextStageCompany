use CATS
CREATE TABLE cat (
    id int AUTO_INCREMENT NOT NULL,
    Name varchar(255),
    Bread varchar(255),
    Description varchar(255),
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (id)
);