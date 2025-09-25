import { useState, useRef, useEffect } from "react";
import { IoIosSend } from "react-icons/io";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

    useEffect(() => {
    if (messages.length === 0) {
      const initiateMessage = {
        sender: "bot",
        text: "Hi there! 👋 I’m your personal portfolio assistant. Ask me anything about Aakash Kumar!",
      };
      setMessages([initiateMessage]);
    }
  }, []);


  const handleSend = async () => {
    if (!input) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(
        "https://n8n.project1.space/webhook/6332497e-7865-4335-822a-a8e418df5736/chat",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chatInput: input }),
        }
      );
      const data = await res.json();
      const botMessage = {
        sender: "bot",
        text: data.text || "Sorry, I didn't get that.",
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Oops! Something went wrong." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto mb-2 px-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-2 my-1 rounded-lg max-w-[80%] break-words ${
              msg.sender === "user"
                ? "self-end bg-purple-600 text-white"
                : "self-start bg-gray-200 text-gray-900"
            }`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Ask me what do u wanna no?"
          className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 text-black"
        />
        <button
          onClick={handleSend}
          className="bg-purple-600 hover:bg-purple-700 text-black px-4 py-2 rounded-lg disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "..." : <IoIosSend size={30} />}
        </button>
      </div>
    </div>
  );
};

export default Chatbot;

