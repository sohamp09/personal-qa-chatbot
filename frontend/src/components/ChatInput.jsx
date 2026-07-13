import { useState } from "react";

function ChatInput({ onSend }) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;

    onSend(text);
    setText("");
  };

  return (
    <div className="border-t p-4 bg-gray-900">
      <div className="flex gap-2">
        <input
          className="flex-1 border text-white rounded-lg px-4 py-2"
          placeholder="Ask anything..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSend();
          }}
        />

        <button
          onClick={handleSend}
          className="bg-gray-600 active:scale-95 text-yellow-400 px-5 rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatInput;