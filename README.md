# Job Portal Microservices

A simple job portal built with Python microservices, supporting Hebrew language.

## Services

- Gateway Service (port 5000): Routes requests to appropriate services
- Auth Service (port 5001): Handles user authentication
- Jobs Service (port 5002): Manages job listings
- User Service (port 5003): Handles user profiles and applications
- Chatbot Service (port 5004): Simple Hebrew-language chatbot

## Setup and Running

1. Install Docker and Docker Compose
2. Clone this repository
3. Build and run services:
```bash
docker-compose build
docker-compose up
```

## Testing the Services

### Test Authentication:
```bash
curl -X POST http://localhost:5000/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com", "password": "password123"}'
```

### Test Job Listing:
```bash
curl http://localhost:5000/jobs/jobs
```

### Test User Profile:
```bash
curl -X POST http://localhost:5000/users/users \
  -H "Content-Type: application/json" \
  -d '{"name": "Test User", "email": "test@example.com"}'
```

### Test Chatbot:
```bash
curl -X POST http://localhost:5000/chatbot/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "שלום"}'
```

## Hebrew Language Support

The application includes Hebrew language support in:
- Error messages
- Chatbot responses
- User interface messages

## Future Improvements

1. Add database persistence
2. Implement proper error handling
3. Add more sophisticated chatbot responses
4. Implement job recommendation system
5. Add email notifications