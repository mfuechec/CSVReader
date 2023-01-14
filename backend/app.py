from flask import Flask, request
import pandas as pd
from flask_cors import CORS
import io
import json

app = Flask(__name__)
CORS(app, resources={r"*": {"origins": "*"}})

@app.route("/")
def hello():
    return "Hello, World!"
    
@app.route("/fileupload", methods=["GET", "POST"])
def fileupload():
    df = pd.read_csv(io.BytesIO(request.data)).to_json()
    return df

if __name__ == "__main__":
    app.run("localhost", 6969)