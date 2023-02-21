from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

# @app.route("/")
# def home():
#     return "Hello, Flask!"


@app.route("/listForms")
def home():
    return [{"name": "Form 1"}, {"name": "Form 2"}]

if __name__ == "__main__":
    app.run(debug=True)
