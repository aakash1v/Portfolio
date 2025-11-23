import { FaDownload } from "react-icons/fa";

export default function FloatingResumeButton() {
  return (
    <a
      href="/resume.pdf"
      download
      className="
        fixed bottom-6 right-6
        bg-green-500 text-black
        p-4 rounded-full
        shadow-lg shadow-green-500/40
        hover:bg-green-400 hover:shadow-green-400/50
        transition-all
        z-50
        animate-pulse
      "
      title="Download Resume"
    >
      <FaDownload size={22} />
    </a>
  );
}

