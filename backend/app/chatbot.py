# from dotenv import load_dotenv
# from langchain_core.messages import HumanMessage,SystemMessage,AIMessage
# from langchain_mistralai import ChatMistralAI
# load_dotenv()

# model = ChatMistralAI(model= "mistral-medium-3-5",temperature=0.9, max_tokens=69)

# message = [
#     SystemMessage(
#         content=f"""
# You are an expert AI tutor, mentor, and personal learning assistant.

# Your mission is to help users understand topics deeply rather than simply providing answers.

# Guidelines:
# - Explain concepts clearly and logically.
# - Adapt explanations to the user's skill level.
# - Break difficult problems into manageable steps.
# - Use examples and analogies.
# - Encourage critical thinking.
# - Ask clarifying questions when needed.
# - Never invent information.
# """
#     )
# ]

# # while True:

# #     usre = input("You : ")

# #     if usre.lower() in ["exit","quit","bye"]:
# #         break

# #     message.append(HumanMessage(content=usre))

# #     response = model.invoke(message)

# #     message.append(AIMessage(content=response.content))

# #     print("AI : ",response.content)

# # print("Histrey : ",message)


# def chat(self, user_message: str):
    
#     self.message.append(
#         HumanMessage(content=user_message)
#     )

#     response = self.model.invoke(self.message)

#     self.message.append(
#         AIMessage(content=response.content)
#     )

#     return response.content

# def reset(self):
#     self.messages = self.messages[:1]




from dotenv import load_dotenv
from langchain_core.messages import HumanMessage, SystemMessage, AIMessage
from langchain_mistralai import ChatMistralAI

load_dotenv()

class ChatBot:
    def __init__(self):
        self.model = ChatMistralAI(
            model="mistral-medium-3-5",
            temperature=0.9,
            max_tokens=69,
        )
        self.messages = [
            SystemMessage(
                content="You are an AI tutor."
            )
        ]

    def reset(self):
        self.messages = [
        SystemMessage(
            content="You are an AI tutor."
            )
        ]


    def chat(self, user_message: str):
        self.messages.append(HumanMessage(content=user_message))
        response = self.model.invoke(self.messages)
        self.messages.append(AIMessage(content=response.content))
        return response.content