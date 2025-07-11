from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()  # loads from .env by default
app = FastAPI()

#allows front end to talk to back end
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:1420"],  # match front end port
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

#pydantic model for request body
class ScheduleRequest(BaseModel):
    prompt: str

#AI client setup
client = OpenAI(
    base_url="https://api.groq.com/openai/v1",
    api_key=os.getenv("GROQ_API_KEY"),
)

#generate response
@app.post("/generate-schedule")
async def generate_schedule(req: ScheduleRequest):
    response = client.chat.completions.create(
        model="llama3-8b-8192",
        messages=[
            {"role": "user", "content": req.prompt}
        ]
    )
    return {"response": response.choices[0].message.content}

# response = client.chat.completions.create(
#     model="llama3-8b-8192",
#     messages=[
#         {
#             "role": "user",
#             "content": "Make a schedule for: grocery shopping, coding (2 hours), lunch. I'm free from 9 to 5. Include only the activity title, the length, the beginning time and end time."
#         }
#     ]
# )

# print(response.choices[0].message.content)