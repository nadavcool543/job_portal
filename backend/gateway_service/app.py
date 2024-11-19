from flask import Flask, request, jsonify
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Simple service registry
SERVICES = {
    'auth': 'http://auth_service:5001',
    'jobs': 'http://jobs_service:5002',
    'users': 'http://user_service:5003',
    'chatbot': 'http://chatbot_service:5004'
}

@app.route('/<service>/<path:path>', methods=['GET', 'POST'])
def proxy(service, path):
    if service not in SERVICES:
        return jsonify({"error": "Service not found"}), 404
    
    service_url = f"{SERVICES[service]}/{path}"
    
    try:
        if request.method == 'GET':
            response = requests.get(service_url, params=request.args)
        else:
            response = requests.post(
                service_url, 
                json=request.get_json(),
                headers={
                    'Content-Type': 'application/json'
                }
            )
        
        return response.json(), response.status_code
    except requests.exceptions.RequestException as e:
        print(f"Error connecting to service: {str(e)}")
        return jsonify({"error": "Service unavailable"}), 503

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)