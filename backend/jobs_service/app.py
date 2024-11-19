# jobs_service/app.py
from flask import Flask, request, jsonify

app = Flask(__name__)

# Simple in-memory storage
jobs_db = [
    {
        "id": 1,
        "title": "Python Developer",
        "company": "Tech Corp",
        "location": "Tel Aviv",
        "type": "Full-time",
        "description": "Looking for a Python developer...",
        "requirements": ["Python", "Flask", "MongoDB"]
    }
]

@app.route('/jobs', methods=['GET'])
def get_jobs():
    # Add simple filtering
    location = request.args.get('location')
    job_type = request.args.get('type')
    
    filtered_jobs = jobs_db
    if location:
        filtered_jobs = [job for job in filtered_jobs if job['location'].lower() == location.lower()]
    if job_type:
        filtered_jobs = [job for job in filtered_jobs if job['type'].lower() == job_type.lower()]
    
    return jsonify(filtered_jobs)

@app.route('/jobs', methods=['POST'])
def create_job():
    job = request.get_json()
    job['id'] = len(jobs_db) + 1
    jobs_db.append(job)
    return jsonify(job), 201

@app.route('/jobs/<int:job_id>', methods=['GET'])
def get_job(job_id):
    job = next((job for job in jobs_db if job['id'] == job_id), None)
    if job is None:
        return jsonify({"error": "Job not found"}), 404
    return jsonify(job)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5002)