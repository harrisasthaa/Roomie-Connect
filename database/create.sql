drop table if exists User;
drop table if exists Interest;
drop table if exists Compare;
drop table if exists Display;

create table Compare(
    id int,
    location varchar(50),
    gender int,
    interest varchar(100),
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
    major varchar(35), 
    university varchar(35), 
    gender int,
    email varchar(35), 
    city_state varchar(20),
    interest varchar(15), 
    about_me text,
    PRIMARY KEY(id)
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