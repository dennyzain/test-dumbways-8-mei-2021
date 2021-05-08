--DATABASE webcourse

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
VALUES(1,'PHP','php.png',1,'48 hours','berisi belajar dasar tentang PHP'),
		(2,'JavaScript','javascript.png',2,'52 hours','berisi tentang javascript terbaru fitur ES6'),
        (3,'NodeJs','nodejs.png',3,'45 hours','berisi pembelajaran node js pemula'),
        (4,'ReactJs','react.png',4,'20 hours','berisi tentang pembelajaran react'),
        (5,'VueJs','vue.png',5,'30hours','berisi pembelajaran framework vuejs');

SELECT * FROM course_tb; --untuk menampilkan seluruh dari table course_tb

CREATE TABLE content_tb(
content_id INT NOT NULL AUTO_INCREMENT,
content_name VARCHAR(100) NOT NULL DEFAULT 'none',
video_link VARCHAR(200) NOT NULL DEFAULT 'none',
content_type VARCHAR(100) NOT NULL DEFAULT 'none',
id_course INT NOT NULL DEFAULT '0',
PRIMARY KEY (content_id)
)ENGINE=InnoDB;

INSERT INTO content_tb(content_id,content_name,video_link,content_type,id_course)
VALUES(1,'PHP','none','pemprograman',1),
		(2,'JavaScript','none','pemprograman',2),
        (3,'NodeJs','none','pemprograman',3),
        (4,'ReactJs','none','pemprograman',4),
        (5,'VueJs','none','pemprograman',5);
 
 SELECT * FROM content_tb; --untuk menampilkan seluruh table content_tb
 
CREATE TABLE author_tb(
author_id INT NOT NULL AUTO_INCREMENT,
author_name VARCHAR(50) NOT NULL DEFAULT 'none',
PRIMARY KEY(author_id)
)ENGINE=InnoDB;

INSERT INTO author_tb(author_id,author_name)
VALUES(1,'Sinchan'),
		(2,'Doraemon'),
        (3,'Naruto'),
        (4,'Sukuna'),
        (5,'Itachi');
        
SELECT * FROM author_tb; --untuk menampilkan seluruh table author_tb