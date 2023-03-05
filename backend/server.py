from flask import Flask, jsonify
from query import get_user
import sqlite3
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route("/")
def hello():
    return "Hello World!"

@app.route("/request1", methods=['GET'])
def request1():
    return get_user()

if __name__== "__main__":
    app.run()
