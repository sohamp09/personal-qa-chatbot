function ChatWindow({ messages, loading }) {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-3">

      {messages.map((msg, index) => (
        <div
          key={index}
          className={`max-w-xl p-3 rounded-lg ${
            msg.role === "user"
              ? "ml-auto bg-gray-600 text-gray-100 font-serif"
              : "mr-auto bg-yellow-300 text-gray-600 font-serif"
          }`}
        >
          {msg.content}
        </div>
      ))}

      {loading && (
        <div className="bg-yellow-200 p-3 rounded-lg w-fit">
          Thinking...
        </div>
      )}

    </div>
  );
}

export default ChatWindow;