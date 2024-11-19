from flask import Flask, request, jsonify
from flask_cors import CORS
import groq

app = Flask(__name__)
CORS(app)

# Initialize GROQ client
GROQ_API_KEY = "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"
client = groq.Groq(api_key=GROQ_API_KEY)

# Simple system prompt
SYSTEM_PROMPT = "אתה אסיסטנט עוזר של פורטל משרות. עליך לענות בעברית ולעזור למשתמשים למצוא עבודה בתחום ההייטק."

@app.route('/chat', methods=['POST'])
def chat():
    try:
        message = request.json.get('message', '')
        
        completion = client.chat.completions.create(
            messages=[
                {
                    "role": "system",
                    "content": SYSTEM_PROMPT
                },
                {
                    "role": "user",
                    "content": message
                }
            ],
            model="llama-3.1-70b-versatile",
            temperature=0.7,
            max_tokens=1000,
            top_p=1,
            stream=False
        )
        
        return jsonify({
            'response': completion.choices[0].message.content,
            'intent': 'chat'
        })

    except Exception as e:
        print(f"Error: {str(e)}")
        return jsonify({
            'response': 'מצטער, נתקלתי בבעיה. אנא נסה שוב.',
            'intent': 'error'
        }), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5004)