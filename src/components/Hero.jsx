import { useState } from "react";
import { IoIosSend } from "react-icons/io";

export default function Hero() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChat = async () => {
    if (!message.trim()) return;

    setLoading(true);

    try {
      // show user's message instantly
      setReply("Processing...");

      const res = await fetch(
        "https://n8n.project1.space/webhook/6332497e-7865-4335-822a-a8e418df5736/chat",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chatInput: message }),
        },
      );

      const data = await res.json();

      const botReply = data.text || "Sorry, I didn't get that.";
      setReply(botReply);
    } catch (error) {
      setReply("Oops! Something went wrong.");
    } finally {
      setMessage("");
      setLoading(false);
    }
  };

  return (
    <section
      id="hero"
      className="px-6 md:px-12 py-28 flex flex-col md:flex-row items-center justify-between"
    >
      {/* Left Section */}
      <div className="max-w-xl">
        <h1 className="text-5xl font-bold text-green-400">
          Aakash <span className="text-white">—</span>
        </h1>

        <p className="text-gray-300 mt-4 text-lg">
          // Building robust systems, one line of code at a time.
        </p>

        {/* ---- MINI CHATBOX ---- */}
        <div className="mt-6 w-full max-w-md">
          {/* Bot Reply */}
          {reply && (
            <div className="mb-3 bg-black border border-green-500/40 text-green-300 p-3 rounded-lg text-sm">
              {reply}
            </div>
          )}

          {/* Input Row */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleChat()}
              placeholder="Ask me something…"
              className="
                flex-1 px-3 py-2 bg-[#0b0f10] 
                border border-green-500/40 
                text-green-300 text-sm rounded-lg 
                focus:outline-none focus:border-green-400
              "
            />

            <button
              onClick={handleChat}
              disabled={loading}
              className="
                bg-green-500 hover:bg-green-400 
                text-black p-2 rounded-lg transition disabled:opacity-50
              "
            >
              {loading ? "..." : <IoIosSend size={22} />}
            </button>
          </div>
        </div>
        {/* ---- END MINI CHATBOX ---- */}
      </div>

      {/* Right Code Block */}
      <div className="mt-12 md:mt-0 backdrop-blur-sm border border-gray-800 rounded-xl p-6 bg-white/5 text-green-300 w-[21rem] md:w-[25rem]">
        <pre className="text-sm leading-6">
{`const configureSystem = (os) => {
  if (os === "Arch Linux") {
    pacman -Syu // yay -S neovim tmux
  } else {
    console.log("Unsupported OS");
  }
};
configureSystem("Arch Linux");`}
        </pre>
      </div>
    </section>
  );
}
