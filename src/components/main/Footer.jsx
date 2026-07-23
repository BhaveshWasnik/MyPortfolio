import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { CiMail } from "react-icons/ci";
import { SiReaddotcv } from "react-icons/si";

const Footer = () => {
  const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="w-full bg-transparent text-gray-200 py-10 px-5 sm:px-8 lg:px-12">
      <div className="w-full border-t border-[#0b70eb40] my-8">

        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">

          {/* Community */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-bold mb-5">Community</h3>

            <button
              onClick={() => openLink("https://github.com/BhaveshWasnik")}
              className="flex items-center gap-2 mb-4 hover:text-gray-400 transition duration-300"
            >
              <RxGithubLogo size={20} />
              <span className="text-sm sm:text-base">GitHub</span>
            </button>

            <button
              onClick={() => openLink("https://discord.gg/SyfNMgxtV")}
              className="flex items-center gap-2 hover:text-indigo-400 transition duration-300"
            >
              <RxDiscordLogo size={20} />
              <span className="text-sm sm:text-base">Discord</span>
            </button>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-bold mb-5">Social Media</h3>

            <button
              onClick={() =>
                openLink("https://instagram.com/yoursbhaveshh/")
              }
              className="flex items-center gap-2 mb-4 hover:text-pink-500 transition duration-300"
            >
              <RxInstagramLogo size={20} />
              <span className="text-sm sm:text-base">Instagram</span>
            </button>

            <button
              onClick={() =>
                openLink("https://www.linkedin.com/in/bhavesh-wasnik/")
              }
              className="flex items-center gap-2 hover:text-blue-500 transition duration-300"
            >
              <RxLinkedinLogo size={20} />
              <span className="text-sm sm:text-base">LinkedIn</span>
            </button>
          </div>

          {/* About */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-bold mb-5">About</h3>

            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-yellow-300 transition duration-300"
            >
              <SiReaddotcv size={20} />
              <span className="text-sm sm:text-base">Download Resume</span>
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=bhaveshwasnik25@gmail.com&su=Portfolio%20Inquiry&body=Hello%20Bhavesh,%0A%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding...%0A%0AName:%20%0ACompany:%20%0AEmail:%20%0AMessage:%20"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-cyan-400 transition duration-300 "
            >
              <CiMail size={20} />
              <span className="text-sm sm:text-base">  bhaveshwasnik25@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#0b70eb30] my-8"></div>

        {/* Copyright */}
        <div className="text-center text-xs sm:text-sm md:text-base text-gray-400">
          © {new Date().getFullYear()} Bhavesh Wasnik. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;