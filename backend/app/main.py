from fastapi import FastAPI ,HTTPException
import traceback
from fastapi.middleware.cors import CORSMiddleware

from .chatbot import ChatBot
from .schemas import ChatRequest, ChatResponse

app = FastAPI()

origins = [
    "http://localhost:5173",
    "https://personal-qa-chatbot-3zsc.vercel.app",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

bot = ChatBot()

@app.post("/chat",response_model=ChatResponse)
def chat(data : ChatRequest):
    try:
        answer = bot.chat(data.message)
        return ChatResponse(response=answer)
    except Exception as e:
        print(traceback.format_exc())  # Shows the full error in Render logs
        raise HTTPException(status_code=500, detail=str(e))
    # answer = bot.chat(data.message)

    # return ChatResponse(response=answer)

@app.post("/reset")
def reset():
    bot.reset()
    return {"message": "Conversation reset"}