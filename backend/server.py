from flask import Flask, request, jsonify
from query import get_user, get_discover, create_user
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


@app.route("/getDiscover", methods=['GET'])
def get_discover_request():
    email = request.args.get('email')
    return jsonify(get_discover(email))


@app.route("/createUser", methods=['POST'])
def create_user_request():
    user_data = request.json
    return create_user(user_data)

if __name__== "__main__":
    app.run()
