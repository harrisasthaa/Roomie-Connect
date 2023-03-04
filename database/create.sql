drop table if exists User;
drop table if exists Interest;

create table User(
    id int,
    first_name varchar(15),
    last_name varchar(20),
    email varchar(255),
    about_me text,
    age int,
    gender int,
    city varchar(20),
    state_code varchar(15),
    price_lower int,
    price_upper int,
    friend int,
    quiet int,
    friend_p int,
    quiet_p int
);

create table Interest(
    user_id int,
    interest varchar(15)
)

