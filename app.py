from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/")
def main():
    with open("index.html", "r") as file:
        return file.read()

@app.route("/about")
def about():
    return """
        <p>Missing No More is an initiative to document where missing persons have been found across Cyprus. Our mission is to help families and communities have closure.</p>
        <p>Each marker on the map represents a location where someone has been found. Click the markers to learn more.</p>
    """

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

