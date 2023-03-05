from flask import Flask, request
from query import get_user, get_matches, create_user

app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello World!"


@app.route("/request1", methods=['GET'])
def request1():
    return get_user()


@app.route("/getMatches", methods=['GET'])
def get_matches_request():
    user_id = request.args.get('user_id')
    return get_matches(user_id)


@app.route("/createUser", methods=['POST'])
def create_user_request():
    user_data = request.json
    return create_user(user_data)

if __name__== "__main__":
    app.run()