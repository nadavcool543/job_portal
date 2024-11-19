# user_service/app.py
from flask import Flask, request, jsonify
from datetime import datetime

app = Flask(__name__)

# Simple in-memory storage (replace with MongoDB in production)
users_db = []

@app.route('/users', methods=['POST'])
def create_user():
    user = request.get_json()
    user['id'] = len(users_db) + 1
    user['created_at'] = datetime.now().isoformat()
    user['applied_jobs'] = []
    user['saved_jobs'] = []
    users_db.append(user)
    return jsonify(user), 201

@app.route('/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = next((user for user in users_db if user['id'] == user_id), None)
    if user is None:
        return jsonify({"error": "משתמש לא נמצא"}), 404  # Hebrew: User not found
    return jsonify(user)

@app.route('/users/<int:user_id>/jobs/apply', methods=['POST'])
def apply_to_job(user_id):
    job_id = request.json.get('job_id')
    user = next((user for user in users_db if user['id'] == user_id), None)
    if user is None:
        return jsonify({"error": "משתמש לא נמצא"}), 404
    
    if job_id not in user['applied_jobs']:
        user['applied_jobs'].append(job_id)
    
    return jsonify({"message": "הבקשה נשלחה בהצלחה"})  # Hebrew: Application submitted successfully

@app.route('/users/<int:user_id>/jobs/save', methods=['POST'])
def save_job(user_id):
    job_id = request.json.get('job_id')
    user = next((user for user in users_db if user['id'] == user_id), None)
    if user is None:
        return jsonify({"error": "משתמש לא נמצא"}), 404
    
    if job_id not in user['saved_jobs']:
        user['saved_jobs'].append(job_id)
    
    return jsonify({"message": "המשרה נשמרה בהצלחה"})  # Hebrew: Job saved successfully

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5003)