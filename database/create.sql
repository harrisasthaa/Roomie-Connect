drop table if exists User;
drop table if exists Interest;
drop table if exists Compare;
drop table if exists Display;
drop table if exists Matches;

create table Compare(
    id int,
    city_state varchar(50),
    gender int,
    interest1 varchar(15), 
    interest2 varchar(15), 
    interest3 varchar(15), 
    major varchar(35), 
    friend int, 
    price_lower int,
    price_upper int,
    PRIMARY KEY(id)
);

create table Display(
    id int,
    first_name varchar(15),
    last_name varchar(20),
    age int,
    university varchar(35), 
    email varchar(35),  
    about_me text,
    PRIMARY KEY(id)
);

create table Matches(
    first_id int, 
    second_id int,
    compatability int, 
    -- #// 1 for only first match, 2 for only second match , 3 for MATCH!! 
    match int
);

-- create table User(
--     id int,
--     first_name varchar(15),
--     last_name varchar(20),
--     email varchar(255),
--     about_me text,
--     age int,
--     gender int,
--     city varchar(20),
--     state_code varchar(15),
--     price_lower int,
--     price_upper int,
--     friend int,
--     quiet int,
--     friend_p int,
--     quiet_p int
-- );

-- create table Interest(
--     user_id int,
--     interest varchar(15)
-- )