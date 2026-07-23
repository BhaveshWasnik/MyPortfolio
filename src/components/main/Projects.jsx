import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="py-12 sm:py-16 md:py-20 text-3xl sm:text-4xl md:text-5xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">        My Projects
      </h1>

      <div className="flex h-full w-full flex-col gap-10 px-10 md:flex-row">
        <ProjectCard
          src="/MacAi.png"
          title="Mac AI – Speak Smart. Live Smart | MERN + Gemini API"
          description="A full-stack AI voice assistant using React.js, Node.js, Express.js, and MongoDB, enabling seamless voice-based interactions with real-time speech recognition and text-to-speech functionality."
        />

        <ProjectCard
          src="/NetflixProject.png"
          title="Netflix Clone – Responsive Streaming Platform"
          description="A responsive Netflix-inspired streaming platform built with HTML, Tailwind CSS, and JavaScript. Features a modern UI with movie sections, interactive navigation, hover effects, and a fully responsive design that delivers a seamless viewing experience across desktop and mobile devices."
        />

        <ProjectCard
          src="/SpotifyProject.png"
          title="Spotify Clone – Music Streaming Interface"
          description="Built a responsive Spotify-inspired music streaming interface using HTML, Tailwind CSS, and JavaScript. Designed an interactive UI featuring playlists, music controls, a sidebar navigation, responsive layouts, and smooth animations to deliver a modern music streaming experience across desktop and mobile devices."
        />
      </div>
    </section>
  );
};

export default Projects;