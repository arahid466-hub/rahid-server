from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return jsonify({"message": "Rahid ka powerful AI server chal raha hai!"})

@app.route("/ai")
def ai():
    return jsonify({"reply": "Yeh Rahid ka AI endpoint hai!"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000)
