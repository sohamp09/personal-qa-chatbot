from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .chatbot import ChatBot
from .schemas import ChatRequest, ChatResponse

app = FastAPI()

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

    answer = bot.chat(data.message)

    return ChatResponse(response=answer)

@app.post("/reset")
def reset():
    bot.reset()
    return {"message": "Conversation reset"}