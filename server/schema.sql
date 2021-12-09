CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  text TEXT NULL,
  userId INT NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  roomname CHAR(20) NULL
);

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username CHAR(20) NULL
);

ALTER TABLE messages ADD FOREIGN KEY (userId) REFERENCES users (id);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

