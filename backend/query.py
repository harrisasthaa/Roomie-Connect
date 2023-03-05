import sqlite3
from flask import jsonify
import pandas as pd
import numpy

def match_algorithm(user_data, df):
    print(df)
    print(user_data)
    #the data in df has been filter based on location and gender and full tim e
    #friend
    w1 = .42
    #quiet
    w2 = .55
    #makor
    w3 = .11
    #interests 
    w4 = .3
    #moneyyy 
    w5 = .9
    
    df['compatibility'] = 0
    ## first deal with the friends --- all or nothing 
    # if the friend pereference matches selected users preference 
    

    for i in range(len(df)):
        interest_comp = 0
        for k in range(1,4):
            colname = "interest"+str(k)
            for j in range(1,4):
                colname_j = "interest"+str(j)
                if df.iloc[i][colname] == user_data[colname_j] :
                    interest_comp+=1
                    continue
        df.iloc[i]['compatibility'] += (interest_comp/3*w4)
    
                    
    ## solving for price range matching 
    for i in range(len(df)):
        

        if df.iloc[i]['friend'] == numpy.int64(user_data['friend']):
           
            df.loc[i, 'compatibility'] += w1*1
            
        
    ##check the quiet preference --- all or nothing 
        if df.iloc[i]['quiet'] == user_data['quiet_p']:
           
            df.loc[i, 'compatibility'] += w2*1
        
        if df.iloc[i]['major'] == user_data['major']:
            print("eneterf2")
            df.loc[i, 'compatibility'] += w3*1
 
        
        overlap = (min(df.iloc[i]['price_upper'], user_data['price_lower']) - max(df.iloc[i]['price_lower'], df.iloc[i]['price_upper']))/(user_data['price_upper']-user_data['price_lower'])
        df.loc[i, 'compatibility'] += (overlap*w5)

    print(df[['id', 'compatibility']])

    return list(df[['id', 'compatibility']].itertuples(index=False, name=None))
    


# algorithm 
def find_matches(user_data):
    c = sqlite3.connect("../database/bunk.db")
    if user_data['gender_p'] == 2:
        df = pd.read_sql_query(f"SELECT * \
                            FROM Compare\
                            WHERE id!={user_data['id']}\
                            AND city_state='{user_data['city_state']}'\
                            AND full_time='{user_data['full_time']}'", c)
        
    else:
        df = pd.read_sql_query(f"SELECT * \
                                FROM Compare\
                                WHERE id!={user_data['id']}\
                                AND city_state='{user_data['city_state']}'\
                                AND gender='{user_data['gender_p']}'\
                                AND full_time='{user_data['full_time']}'", c)
    print(df)
    print("first")
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

# gets discovery matches for a particular user id
def get_discover(email):
    c = sqlite3.connect("../database/bunk.db").cursor()

    # get user_id
    c.execute(f"SELECT id FROM Display WHERE email='{email}'")
    result = c.fetchone()
    if result:
        user_id = result[0]
    else:
        return

    # get user_ids of matches
    match_ids = []
    c.execute(f"SELECT first_id FROM Matches WHERE second_id={user_id} AND (match=1 OR match=0)")
    match_ids.extend(c.fetchall())
    c.execute(f"SELECT second_id FROM Matches WHERE first_id={user_id} AND (match=2 OR match=0)")
    match_ids.extend(c.fetchall())
    # get info about matches
    # id, first_name, last_name, gender, age, major, city_state, price_upper, price_lower, interests, about_me
    matches = []
    keys = ["id", "first_name", "last_name", "gender", "age", "major", "university", "city_state", "price_upper", "price_lower", "about_me", "interest1", "interest2", "interest3", "full_time"]
    for match_id in match_ids:
        c.execute(f"SELECT D.id, D.first_name, D.last_name, C.gender, D.age, C.major, D.university, C.city_state, C.price_upper, C.price_lower, D.about_me, C.interest1, C.interest2, C.interest3\
             FROM Display D, Compare C\
             WHERE D.id = C.id\
             AND D.id={match_id[0]}\
             ORDER BY compatability DESC")
        # print(dict(zip(keys,c.fetchall()[0])))
        matches.append(dict(zip(keys,c.fetchall()[0])))
    c.connection.close()
    return matches

# get_discover("dummyemail@gmail.com")

def get_matches(email):
    c = sqlite3.connect("../database/bunk.db").cursor()

    # get user_id
    c.execute(f"SELECT id FROM Display WHERE email='{email}'")
    result = c.fetchone()
    if result:
        user_id = result[0]
    else:
        return

    # get user_ids of matches
    match_ids = []
    c.execute(f"SELECT first_id FROM Matches WHERE second_id={user_id} AND match=3")
    match_ids.extend(c.fetchall())
    c.execute(f"SELECT second_id FROM Matches WHERE first_id={user_id} AND match=3")
    match_ids.extend(c.fetchall())
    # get info about matches
    # id, first_name, last_name, gender, age, major, city_state, price_upper, price_lower, interests, about_me
    matches = []
    keys = ["id", "first_name", "last_name", "gender", "age", "major", "university", "city_state", "price_upper", "price_lower", "about_me", "interest1", "interest2", "interest3", "full_time"]
    for match_id in match_ids:
        c.execute(f"SELECT D.id, D.first_name, D.last_name, C.gender, D.age, C.major, D.university, C.city_state, C.price_upper, C.price_lower, D.about_me, C.interest1, C.interest2, C.interest3\
             FROM Display D, Compare C\
             WHERE D.id = C.id\
             AND D.id={match_id[0]}\
             ORDER BY compatability DESC")
        # print(dict(zip(keys,c.fetchall()[0])))
        matches.append(dict(zip(keys,c.fetchall()[0])))
    c.connection.close()
    return matches

# adds new user to database and finds matches with existing users
def create_user(user_data):
    connection = sqlite3.connect("../database/bunk.db")
    cursor = connection.cursor()
    cursor.execute("SELECT id FROM Display ORDER BY id DESC LIMIT 1")
    id = cursor.fetchall()[0][0]+1
    print(id)
    # insert basic data
    display_keys = ("id", "first_name", "last_name", "phone", "age", "university", "email", "about_me", "img_link")
    user_data["id"] = id
    display_values = (user_data[key] for key in display_keys)
    compare_keys = ("id", "city_state", "full_time", "gender", "gender_p", "interest1", "interest2", "interest3", "major", "friend", "price_lower", "price_upper", "quiet", "quiet_p")
    compare_values = (user_data[key] for key in compare_keys)
    # print(f"INSERT INTO Display {display_keys} VALUES {tuple(display_values)}")
    cursor.execute(f"INSERT INTO Display (id, first_name, last_name, phone, age, university, email, about_me, img_link) VALUES {tuple(display_values)}")
    connection.commit()
    cursor.execute(f"INSERT INTO Compare (id, city_state, full_time, gender, gender_p, interest1, interest2, interest3, major, friend, price_lower, price_upper, quiet, quiet_p) VALUES {tuple(compare_values)}")
    connection.commit()
    # connection.commit()
    # find matches
    matches = find_matches(user_data)
    if len(matches) > 0:
        for match_id, compatability in matches:
            # add to matches table
            print(f"INSERT INTO Matches (first_id, second_id, compatability, match) VALUES ({id}, {match_id}, {compatability}, 0)")
            cursor.execute(f"INSERT INTO Matches (first_id, second_id, compatability, match) VALUES ({id}, {match_id}, {compatability}, 0)")
            connection.commit()
    connection.close()
    return "NICE"
    
# user_data= {"first_name": "Johnny", "last_name": "Appleseed","full_time":1, "phone":"123-456-7890", "age":21, "university":"Harvard University", "email":"dummyemail@gmail.com", "about_me":"Hi This is about me.","city_state":"Los Angeles, CA", "gender":0, "gender_p":0, "interest1":"Reading", "interest2":"Writing", "interest3":"Hiking", "major":"Accounting", "friend":0, "price_lower":1500, "price_upper":2000, "quiet":1, "quiet_p":1}
# create_user(user_data)

def update_match(email1, id2, match_state):
    connection = sqlite3.connect("../database/bunk.db")
    cursor = connection.cursor()

    # get user id
    cursor.execute(f"SELECT id from Display WHERE email='{email1}' LIMIT 1")
    id1 = cursor.fetchone()
    if id1:
        id1 = id1[0]

    # get prev state
    ## if first id - the one being updated 
    cursor.execute(f"SELECT match FROM Matches WHERE (first_id={id1} AND second_id={id2})")
    match = cursor.fetchone()
    if match:
        id1 = id1[0]
        first = True
    else:
        return "No Match Found"
    
    ##second id is being updated 
    cursor.execute(f"SELECT match FROM Matches WHERE (first_id={id2} AND second_id={id1})")
    match = cursor.fetchone()
    if match:
        id1 = id1[0]
        first = False
    else:
        return "No Match Found"
    
    if (match == 1 or match == 2) and match_state == 1:
        match = 3
    elif match == 0 and match_state == 1:
        if first:
            ## first id 
            match = 1
        else:
            ##second id 
            match = 2
    elif match_state == 0:
        match = 4

    if first:
        cursor.execute(f"UPDATE Matches SET match={match} WHERE first_id={id1} AND second_id={id2}")
    else:
        cursor.execute(f"UPDATE Matches SET match={match} WHERE first_id={id2} AND second_id={id1}")
    connection.commit()
    connection.close()
    return "Match updated probably"
