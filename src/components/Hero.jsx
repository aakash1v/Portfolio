import { useState, useEffect } from "react";
import { IoIosSend } from "react-icons/io";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";

export default function Hero() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);
  const [muted, setMuted] = useState(false);
  const [voiceReady, setVoiceReady] = useState(false);
  const [selectedVoice, setSelectedVoice] = useState(null);

  // Load voices in a Firefox-safe manner
  useEffect(() => {
    let interval;

    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      if (voices.length > 0) {
        const englishVoice =
          voices.find((v) => v.lang.includes("en")) || voices[0];
        setSelectedVoice(englishVoice);
        setVoiceReady(true);
        clearInterval(interval);
      }
    };

    loadVoices();

    interval = setInterval(loadVoices, 200);

    window.speechSynthesis.onvoiceschanged = loadVoices;

    return () => clearInterval(interval);
  }, []);

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

      if (!muted) speak(botReply);
    } catch (error) {
      const err = "Oops! Something went wrong.";
      setReply(err);
      if (!muted) speak(err);
    }

    setMessage("");
    setLoading(false);
  };

  const speak = (text) => {
    if (!voiceReady || !selectedVoice) return;

    window.speechSynthesis.cancel();

    const utter = new SpeechSynthesisUtterance(text);
    utter.voice = selectedVoice;
    utter.pitch = 1;
    utter.rate = 1;
    utter.volume = 1;

    setTimeout(() => {
      window.speechSynthesis.speak(utter);
    }, 100);
  };

  const toggleMute = () => {
    setMuted((m) => !m);
    window.speechSynthesis.cancel();
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

        {/* MINI CHATBOX */}
        <div className="mt-6 w-full max-w-md">
          {reply && (
            <div className="mb-3 bg-black border border-green-500/40 text-green-300 p-3 rounded-lg text-sm">
              <div className="flex justify-between">
                <span>{reply}</span>

                <button
                  onClick={toggleMute}
                  className="text-green-400 hover:text-green-200 transition"
                >
                  {muted ? <FaVolumeMute size={18} /> : <FaVolumeUp size={18} />}
                </button>
              </div>

              {/* Proper placement below message */}
              {!voiceReady && (
                <p className="text-xs text-green-400 mt-2 opacity-70">
                  Loading voice… please wait.
                </p>
              )}
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
              disabled={loading || !voiceReady}
              className="
                bg-green-500 hover:bg-green-400 
                text-black p-2 rounded-lg transition 
                disabled:opacity-50
              "
            >
              {loading ? "..." : <IoIosSend size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Right Block */}
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

