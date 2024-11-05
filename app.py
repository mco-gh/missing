from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/")
def main():
    with open("index.html", "r") as file:
        return file.read()

@app.route("/map.js")
def map():
    with open("map.js", "r") as file:
        return file.read()

@app.route("/details/<int:marker_id>")
def get_marker_details(marker_id):
    # Data could be retrieved from a database in a real-world application
    data = {
        1: {"name": "John Doe", "date_found": "2023-05-10", "link": "https://example.com/article1"},
        2: {"name": "Jane Smith", "date_found": "2023-07-15", "link": "https://example.com/article2"},
    }
    return jsonify(data.get(marker_id, {}))
