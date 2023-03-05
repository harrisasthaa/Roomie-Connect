import sqlite3
from flask import jsonify
import pandas as pd

def match_algorithm(user_data, df):
    
    return

# algorithm 
def find_matches(user_data):
    c = sqlite3.connect("../database/bunk.db")
    if user_data['gender_p'] == 2:
        df = pd.read_sql_query(f"SELECT * \
                            FROM Compare\
                            WHERE city_state='{user_data['city_state']}'", c)
    else:
        df = pd.read_sql_query(f"SELECT * \
                                FROM Compare\
                                WHERE city_state='{user_data['city_state']}'\
                                AND gender={user_data['gender_p']}", c)

    c.close()
    # return match_algorithm(user_data, df)
    return [(1, 50)]

# old function
def get_user():
    c = sqlite3.connect("../database/bunk.db").cursor()
    c.execute("SELECT * FROM User")
    data = c.fetchall()
    c.connection.close()
    keys = ["id", "first_name", "last_name", "age", "gender", "price_lower", "price_upper", "friend", "quiet"]
    users = [dict(zip(keys, d)) for d in data]
    return jsonify(users)

# gets matches for a particular user id
def get_matches(user_id):
    c = sqlite3.connect("../database/bunk.db").cursor()

    # get user_ids of matches
    match_ids = []
    c.execute("SELECT first_id FROM Matches WHERE second_id={user_id}")
    match_ids.append(c.fetchall())
    c.execute("SELECT second_id FROM Matches WHERE first_id={user_id}")
    match_ids.append(c.fetchall())

    # get info about matches
    # id, first_name, last_name, gender, age, major, city_state, price_upper, price_lower, interests, about_me
    matches = []
    keys = ["id", "first_name", "last_name", "gender", "age", "major", "city_state", "price_upper", "price_lower", "about_me"]
    for match_id in match_ids:
        c.execute(
            "SELECT id, first_name, last_name, gender, age, major, city_state, price_upper, price_lower, about_me\
             FROM Display D, Compare C\
             WHERE D.id = C.id\
             AND id={match_id}")
        matches.append(dict(zip(keys,c.fetchall())))
    c.connection.close()
    return jsonify(matches)

# adds new user to database and finds matches with existing users
def create_user(user_data):
    connection = sqlite3.connect("../database/bunk.db")
    cursor = connection.cursor()
    # insert basic data
    display_keys = ("first_name", "last_name", "phone", "age", "university", "email", "about_me")
    display_values = (user_data[key] for key in display_keys)
    compare_keys = ("city_state", "gender", "gender_p", "interest1", "interest2", "interest3", "major", "friend", "price_lower", "price_upper", "quiet", "quiet_p")
    compare_values = (user_data[key] for key in compare_keys) 
    # print(f"INSERT INTO Display {display_keys} VALUES {tuple(display_values)}")
    # print(tuple(display_values))
    cursor.execute(f"INSERT INTO Display (first_name, last_name, phone, age, university, email, about_me) VALUES {tuple(display_values)}")
    cursor.execute(f"INSERT INTO Compare (city_state, gender, gender_p, interest1, interest2, interest3, major, friend, price_lower, price_upper, quiet, quiet_p) VALUES {tuple(compare_values)}")
    connection.commit()
    # find matches
    cursor.execute("SELECT id FROM Display ORDER BY id DESC LIMIT 1")
    id = cursor.fetchall()[0]
    matches = find_matches(user_data)
    if len(matches) > 0:
        for match_id, compatability in matches:
            # add to matches table
            print(f"INSERT INTO Matches (first_id, second_id, compatability, match) VALUES ({id[0]}, {match_id}, {compatability}, 0)")
            cursor.execute(f"INSERT INTO Matches (first_id, second_id, compatability, match) VALUES ({id[0]}, {match_id}, {compatability}, 0)")
    connection.commit()
    connection.close()
    
# user_data= {"first_name": "Johnny", "last_name": "Appleseed", "phone":"123-456-7890", "age":21, "university":"Harvard University", "email":"dummyemail@gmail.com", "about_me":"Hi This is about me.","city_state":"Los Angeles, LA", "gender":0, "gender_p":0, "interest1":"Reading", "interest2":"Writing", "interest3":"Hiking", "major":"Accounting", "friend":0, "price_lower":1500, "price_upper":2000, "quiet":1, "quiet_p":1}
# create_user(user_data)
