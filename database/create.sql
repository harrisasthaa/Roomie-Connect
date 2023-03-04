drop table if exists User;

create table User(
    id int,
    first_name varchar(15),
    last_name varchar(20),
    age int,
    gender int,
    price_lower int,
    price_upper int,
    friend int,
    quiet int
);
