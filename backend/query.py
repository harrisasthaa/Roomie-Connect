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

    print(df)
    c.close()
    return match_algorithm(user_data, df)

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
    c = sqlite3.connect("../database/bunk.db").cursor()
    # insert basic data
    
    display_values
    values = (user_data[key] for key in user_data.keys())
    c.execute(f"INSERT INTO Display {tuple(user_data.keys())}\
                VALUES ({values})")
    c.execute("INSERT INTO Compare ...")
    # find matches
    matches = find_matches(user_id)
    for match in matches:
        # add to matches table
        c.execute("INSERT INTO Match")
    c.connection.close()
    return

