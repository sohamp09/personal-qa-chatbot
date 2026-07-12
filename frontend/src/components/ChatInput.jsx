import { useState } from "react";

function ChatInput({ onSend }) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;

    onSend(text);
    setText("");
  };

  return (
    <div className="border-t p-4 bg-white">
      <div className="flex gap-2">
        <input
          className="flex-1 border rounded-lg px-4 py-2"
          placeholder="Ask anything..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSend();
          }}
        />

        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-5 rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatInput;