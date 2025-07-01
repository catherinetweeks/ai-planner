from dotenv import load_dotenv
import os
from openai import OpenAI

load_dotenv()  # Loads from .env by default

client = OpenAI(
    base_url="https://api.groq.com/openai/v1",
    api_key=os.getenv("GROQ_API_KEY"),
)

response = client.chat.completions.create(
    model="llama3-8b-8192",
    messages=[
        {
            "role": "user",
            "content": "Make a schedule for: grocery shopping, coding (2 hours), lunch. I'm free from 9 to 5. Include only the activity title, the length, the beginning time and end time."
        }
    ]
)

print(response.choices[0].message.content)