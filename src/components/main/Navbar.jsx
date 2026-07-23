import React from "react";
import { Socials } from "../../constants";

const Navbar = () => {
  return (
    <nav className="w-screen md:w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#00164517] backdrop-blur-md z-50 px-10 m-0 max-w-[1855px] items-center rounded-full">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-0 md:px-[10px]">
        <a
          href="#home"
          className="h-auto w-auto flex flex-row items-center"
        >
          <img
            src="/logo.png"
            alt="logo"
            width={50}
            height={50}
            className="w-10 cursor-pointer hover:animate-spin"
          />

          <span className="font-bold ml-[10px] block text-gray-300 z-50 md:text-lg text-xl">
            Bhavesh Wasnik
          </span>
        </a>

        <div className="hidden md:flex w-3/6 lg:w-1/3 h-full items-center justify-center">
          <div className="flex items-center justify-between w-full border border-[#0b70eb8b] bg-[#07002d5e] px-5 py-2 rounded-full text-gray-200">
            <a href="#about" className="hover:text-blue-600 transition">
              About Me
            </a>

            <a href="#skills" className="hover:text-blue-600 transition">
              Skills
            </a>

            <a href="#projects" className="hover:text-blue-600 transition">
              Projects
            </a>

            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition"
            >
              Resume
            </a>
          </div>
        </div>        <div className="flex flex-row gap-5 text-white">
          {Socials.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
                className="cursor-pointer hover:animate-spin"
              />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;