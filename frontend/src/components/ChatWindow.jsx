function ChatWindow({ messages, loading }) {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-3">

      {messages.map((msg, index) => (
        <div
          key={index}
          className={`max-w-xl p-3 rounded-lg ${
            msg.role === "user"
              ? "ml-auto bg-blue-600 text-white"
              : "mr-auto bg-gray-200"
          }`}
        >
          {msg.content}
        </div>
      ))}

      {loading && (
        <div className="bg-gray-200 p-3 rounded-lg w-fit">
          Thinking...
        </div>
      )}

    </div>
  );
}

export default ChatWindow;