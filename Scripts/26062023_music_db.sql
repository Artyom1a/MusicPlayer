CREATE DATABASE IF NOT EXISTS Songs;

USE Songs;

CREATE TABLE IF NOT EXISTS tracks(
ID INT PRIMARY KEY AUTO_INCREMENT,
ArtistName VARCHAR(40) not null,
`NAME` VARCHAR(40) not null,
`PATH` VARCHAR(100) not null,
Owner_ID INT not null
);

CREATE TABLE IF NOT EXISTS users (
ID INT PRIMARY KEY AUTO_INCREMENT,
`NAME` VARCHAR(25) not null,
EMAIL VARCHAR(30) UNIQUE,
PASSWORD  VARCHAR(255) not null
);

Alter Table tracks ADD constraint FK_user_tracks foreign key (Owner_ID) references users (id);
    

CREATE TABLE IF NOT EXISTS musicplaylist(
ID INT PRIMARY KEY AUTO_INCREMENT,
`NAME` VARCHAR(40) not null,
Owner_id INT not null,
Specification JSON not null
);
    
Alter Table MUSICPLAYLIST ADD constraint FK_user_musicplaylist foreign key (Owner_id ) references users (id);

CREATE TABLE IF NOT EXISTS usersonglike(
ID INT PRIMARY KEY AUTO_INCREMENT,
User_id INT not null,
Track_id INT not null
);

Alter Table usersonglike ADD constraint FK_user_usersonglike foreign key (User_id) references users (id);
Alter Table usersonglike ADD constraint FK_track_usersonglike foreign key (Track_id) references tracks (id);

