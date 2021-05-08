CREATE DATABASE web_course_db;

USE web_course_db;

CREATE TABLE course_tb(
course_id INT NOT NULL AUTO_INCREMENT,
course_name VARCHAR(150) NOT NULL DEFAULT 'none',
course_thumbnail VARCHAR(200) NOT NULL DEFAULT 'none',
id_author INT NOT NULL DEFAULT '0',
course_duration INT NOT NULL DEFAULT '0',
course_description VARCHAR(200) NOT NULL DEFAULT 'none',
PRIMARY KEY (course_id)
)ENGINE=InnoDB;

INSERT INTO course_tb(course_id,course_name,course_thumbnail,id_author,course_duration,course_description)
VALUES(1,PHP,


CREATE TABLE content_tb(
content_id INT NOT NULL AUTO_INCREMENT,
content_name VARCHAR(100) NOT NULL DEFAULT 'none',
video_link VARCHAR(200) NOT NULL DEFAULT 'none',
content_type VARCHAR(100) NOT NULL DEFAULT 'none',
id_course INT NOT NULL DEFAULT '0',
PRIMARY KEY (content_id)
)ENGINE=InnoDB;


CREATE TABLE author_tb(
author_id INT NOT NULL AUTO_INCREMENT,
author_name VARCHAR(50) NOT NULL DEFAULT 'none',
PRIMARY KEY(author_id)
)ENGINE=InnoDB;