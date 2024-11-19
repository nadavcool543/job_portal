# auth_service/app.py
from flask import Flask, request, jsonify
import datetime
import hashlib

app = Flask(__name__)

# Simple in-memory storage for demo
users = {}

def hash_password(password):
    """Simple password hashing"""
    return hashlib.sha256(password.encode()).hexdigest()

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    
    if email in users:
        return jsonify({"error": "המייל כבר רשום במערכת"}), 400
    
    users[email] = {
        'password': hash_password(password),
        'created_at': datetime.datetime.now().isoformat()
    }
    
    return jsonify({"message": "משתמש נרשם בהצלחה"})

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    
    user = users.get(email)
    if not user or user['password'] != hash_password(password):
        return jsonify({"error": "שם משתמש או סיסמה שגויים"}), 401
    
    # Instead of JWT, use a simple token for now
    token = hashlib.sha256((email + str(datetime.datetime.now())).encode()).hexdigest()
    return jsonify({"token": token})

@app.route('/verify', methods=['POST'])
def verify_token():
    token = request.json.get('token')
    # Simple token verification
    if token:
        return jsonify({"valid": True})
    return jsonify({"error": "טוקן לא חוקי"}), 401

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)