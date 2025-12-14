import { useState, useEffect } from "react";
import { IoIosSend } from "react-icons/io";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";

export default function Hero() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);
  const [muted, setMuted] = useState(false);
  const [voice, setVoice] = useState(null);

  useEffect(() => {
    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      if (voices.length > 0) {
        const english =
          voices.find((v) => v.lang.includes("en")) || voices[0];
        setVoice(english);
      }
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  const speakText = (text) => {
    if (!text || !voice) return;
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voice;
    utterance.rate = 1;
    utterance.pitch = 1;

    setTimeout(() => {
      window.speechSynthesis.speak(utterance);
    }, 50);
  };

  const handleChat = async () => {
    if (!message.trim()) return;

    setLoading(true);
    setReply("Processing...");

    try {
      const res = await fetch(
        "https://n8n.project1.space/webhook/6332497e-7865-4335-822a-a8e418df5736/chat",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chatInput: message }),
        }
      );

      const data = await res.json();
      const botReply = data.text || "Sorry, I didn't get that.";
      setReply(botReply);
      if (!muted) speakText(botReply);
    } catch {
      const err = "Oops! Something went wrong.";
      setReply(err);
      if (!muted) speakText(err);
    }

    setMessage("");
    setLoading(false);
  };

  const toggleMute = () => {
    setMuted(!muted);
    window.speechSynthesis.cancel();
  };

  return (
    <section
      id="hero"
      className="px-6 md:px-12 py-28 flex flex-col md:flex-row items-center justify-between gap-14"
    >
      {/* Left */}
      <div className="max-w-xl">
        <h1 className="text-5xl font-bold text-green-400">
          Aakash <span className="text-white">—</span>
        </h1>

        <p className="text-gray-300 mt-4 text-lg">
          Backend-focused developer building reliable systems,
          clean APIs, and scalable infrastructure.
        </p>

        {/* Mini Chat */}
        <div className="mt-6 w-full max-w-md">
          {reply && (
            <div className="mb-3 bg-black border border-green-500/40 text-green-300 p-3 rounded-lg text-sm flex justify-between gap-3">
              <span>{reply}</span>
              <button
                onClick={toggleMute}
                className="text-green-400 hover:text-green-200 transition"
              >
                {muted ? <FaVolumeMute /> : <FaVolumeUp />}
              </button>
            </div>
          )}

          <div className="flex gap-2">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleChat()}
              placeholder="Ask about my work, skills, or projects…"
              className="flex-1 px-3 py-2 bg-[#0b0f10]
                         border border-green-500/40
                         text-green-300 text-sm rounded-lg
                         focus:outline-none focus:border-green-400"
            />

            <button
              onClick={handleChat}
              disabled={loading || !voice}
              className="bg-green-500 text-black p-2 rounded-lg
                         hover:bg-green-400 transition disabled:opacity-50"
            >
              {loading ? "..." : <IoIosSend size={22} />}
            </button>
          </div>

          {!voice && (
            <p className="text-green-300 text-xs mt-2 opacity-70">
              Loading voice…
            </p>
          )}
        </div>
      </div>

      {/* Right – Profile Summary */}
      <div className="w-full max-w-md border border-gray-800 rounded-xl p-6 bg-[#0b0f10]">
        <p className="text-sm text-green-400 font-mono mb-3">
          about.me
        </p>

        <ul className="text-gray-300 text-sm space-y-3 leading-relaxed">
          <li>
            • Backend developer focused on Django, DRF, and FastAPI
          </li>
          <li>
            • Experience with real-time systems using WebSockets
          </li>
          <li>
            • Comfortable with Linux, Docker, CI/CD, and cloud deployments
          </li>
          <li>
            • Strong believer in clean architecture and long-term maintainability
          </li>
        </ul>

        <div className="mt-5 text-xs text-gray-400 font-mono">
          current_focus = "backend · infra · scalability"
        </div>
      </div>
    </section>
  );
}

