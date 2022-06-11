drop database if exists projectdb;

create database projectdb;
use projectdb;

DROP TABLE IF EXISTS genders;
CREATE TABLE IF NOT EXISTS genders (
    gender_id INT(128) NOT NULL AUTO_INCREMENT,
    gender_name VARCHAR(128) NOT NULL,

    PRIMARY KEY(gender_id)
)

DROP TABLE IF EXISTS interests;
CREATE TABLE IF NOT EXISTS interests (
    interest_id INT(128) NOT NULL AUTO_INCREMENT,
    interest_name VARCHAR(128) NOT NULL,

    PRIMARY KEY(interest_id)
)

DROP TABLE IF EXISTS avatar;
CREATE TABLE IF NOT EXISTS avatar (
    avatar_id INT(128) NOT NULL AUTO_INCREMENT,
    avatar_filename VARCHAR(128) NOT NULL,

    PRIMARY KEY(gender_id)
)

DROP TABLE IF EXISTS shown;
CREATE TABLE IF NOT EXISTS shown (
    subject_id INT(128) NOT NULL,
    shown_to_id INT(128) NOT NULL,
    date_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    liked BOOLEAN NOT NULL,

    PRIMARY KEY(subject_id, shown_to_id)
)

DROP TABLE IF EXISTS match;
CREATE TABLE IF NOT EXISTS match (
    id INT(128) NOT NULL AUTO_INCREMENT
    user1_id INT(128) NOT NULL,
    user2_id INT(128) NOT NULL, 
    date_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY(user1_id, user2_id)
)

DROP TABLE IF EXISTS user;
CREATE TABLE IF NOT EXISTS user (
    user_id  INT(128) NOT NULL AUTO_INCREMENT,
    first_name   VARCHAR(128)  NOT NULL,
    phone_num  INT(128)  NOT NULL,
    phone_country_code   INT(128)   NOT NULL,
    user_gender VARCHAR(128)  NOT NULL,
    user_attraction VARCHAR(256) NOT NULL,
    user_romantic BOOLEAN NOT NULL,
    user_sexual BOOLEAN NOT NULL,
    user_birthdate DATE NOT NULL,
    user_age INT(128) NOT NULL,
    user_avatar INT(128) NOT NULL,
    user_interests VARCHAR(128) NOT NULL,
    user_description VARCHAR(256) NOT NULL,
    user_age_range_lower INT(128) NOT NULL,
    user_age_range_upper INT(128) NOT NULL,
    gps_lat VARCHAR(128) NOT NULL,
    gps_long VARCHAR(128) NOT NULL,

    PRIMARY KEY(user_id)
);


