import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black">
      <div className="mx-auto px-6 py-4 ">
      <p className="text-sm text-pink-500/90 text-center mb-4 ">
          © {currentYear} Sannidhi Salibindla. All rights reserved.
        </p>
        <p className="text-xs text-white/50 ">
          This website was created using React for the frontend framework, styled with Tailwind CSS for a clean and responsive design, and enhanced with React Router for seamless navigation. The icons are provided by Lucide Icons, and the development environment is powered by Node.js.
        </p>

      </div>
    </footer>
  );
}

export default Footer;