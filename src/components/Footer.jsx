export default function Footer() {
  return (
    <footer className="border-t border-gray-800 px-6 md:px-12 py-12 mt-20 text-gray-400">
      
      <div className="flex flex-col md:flex-row justify-between">

        {/* Left */}
        <div className="text-sm">
          © 2025 Aakash – Backend Engineer. All rights reserved.
        </div>

        {/* Middle – Icons */}
        <div className="flex space-x-6 mt-6 md:mt-0 text-xl">
          <a href="https://github.com" className="hover:text-green-400">🐱</a>
          <a href="https://linkedin.com" className="hover:text-green-400">💼</a>
          <a href="mailto:aakash@example.com" className="hover:text-green-400">✉️</a>
        </div>

        {/* Right – Quick Links */}
        <div className="mt-6 md:mt-0 text-sm space-y-1">
          <div><a className="hover:text-green-400" href="#skills">Skills</a></div>
          <div><a className="hover:text-green-400" href="#projects">Projects</a></div>
          <div><a className="hover:text-green-400" href="#experience">Experience</a></div>
          <div><a className="hover:text-green-400" href="#about">About</a></div>
          <div><a className="hover:text-green-400" href="#contact">Contact</a></div>
        </div>
      </div>

      <div className="mt-10 text-xs opacity-50">
        Made with ♥
      </div>
    </footer>
  );
}

