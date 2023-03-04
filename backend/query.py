import sqlite3
from flask import jsonify


def get_user():
    c = sqlite3.connect("../database/bunk.db").cursor()
    c.execute("SELECT * FROM User")
    data = c.fetchall()
    c.connection.close()
    keys = ["id", "first_name", "last_name", "age", "gender", "price_lower", "price_upper", "friend", "quiet"]
    users = [dict(zip(keys, d)) for d in data]
    return jsonify(users)
