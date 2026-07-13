import { useState } from "react";
import Navbar from "../components/Navbar";
import ChatWindow from "../components/ChatWindow";
import ChatInput from "../components/ChatInput";
import api from "../services/api";

function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (text) => {
    if (!text.trim()) return;

    const userMessage = {
      role: "user",
      content: text,
    };

    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const res = await api.post("/chat", {
        message: text,
      });

      const aiMessage = {
        role: "assistant",
        content: res.data.response,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Server Error",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="h-dvh w-screen flex flex-col bg-gray-800">
      <Navbar />
      <ChatWindow messages={messages} loading={loading} />
      <ChatInput onSend={sendMessage} />
    </div>
  );
}

export default ChatPage;