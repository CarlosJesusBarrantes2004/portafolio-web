"use client";

import { Inter, Space_Grotesk } from "next/font/google";
import React, { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

const LightOrb = ({ size = "md", color = "blue" }) => {
  const sizeClasses = {
    sm: "w-24 h-24",
    md: "w-32 h-32",
    lg: "w-48 h-48",
  };

  const colorClasses = {
    blue: "bg-blue-500",
    purple: "bg-purple-500",
    cyan: "bg-cyan-500",
  };

  return (
    <div
      className={`absolute blur-3xl opacity-10 rounded-full ${sizeClasses[size]} ${colorClasses[color]}`}
    />
  );
};

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className={`min-h-screen bg-black text-white ${inter.className}`}>
      {/* Cursor light effect */}
      <div
        className="fixed blur-3xl opacity-20 pointer-events-none w-32 h-32 rounded-full bg-blue-500"
        style={{
          left: mousePos.x - 64,
          top: mousePos.y - 64,
          transition: "all 0.1s ease-out",
        }}
      />

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-sm z-50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className={`${spaceGrotesk.className} text-2xl font-bold`}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                Tu Nombre
              </span>
            </h1>
            <div className="flex gap-6">
              {["Home", "Proyectos", "Sobre mí", "Contacto"].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className={`hover:text-blue-400 transition-colors ${
                    activeSection === item.toLowerCase()
                      ? "text-blue-500"
                      : "text-gray-400"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <LightOrb
            size="lg"
            color="blue"
            style={{ top: "20%", left: "10%" }}
          />
          <LightOrb
            size="md"
            color="purple"
            style={{ bottom: "20%", right: "10%" }}
          />

          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h1 className={`${spaceGrotesk.className} text-6xl font-bold mb-6`}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                ¡Hola! Soy Tu Nombre
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Desarrollador Web Full Stack
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
              Ver Proyectos
            </button>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 relative">
          <LightOrb
            size="lg"
            color="cyan"
            style={{ top: "30%", right: "15%" }}
          />

          <div className="max-w-6xl mx-auto px-4">
            <h2
              className={`${spaceGrotesk.className} text-4xl font-bold mb-12 text-center`}
            >
              Mis Proyectos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project Card */}
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-blue-500/50 transition-colors">
                <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Nombre del Proyecto
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Descripción breve del proyecto
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-blue-500/10 rounded-full text-sm text-blue-400">
                      React
                    </span>
                    <span className="px-3 py-1 bg-purple-500/10 rounded-full text-sm text-purple-400">
                      Next.js
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 relative">
          <LightOrb
            size="md"
            color="purple"
            style={{ top: "20%", left: "20%" }}
          />

          <div className="max-w-4xl mx-auto px-4">
            <h2
              className={`${spaceGrotesk.className} text-4xl font-bold mb-12 text-center`}
            >
              Sobre Mí
            </h2>
            <div className="prose prose-lg prose-invert mx-auto">
              <p className="text-gray-400">
                Tu biografía y experiencia profesional aquí...
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 relative">
          <LightOrb
            size="lg"
            color="blue"
            style={{ bottom: "20%", right: "20%" }}
          />

          <div className="max-w-4xl mx-auto px-4">
            <h2
              className={`${spaceGrotesk.className} text-4xl font-bold mb-12 text-center`}
            >
              Contacto
            </h2>
            <form className="max-w-lg mx-auto">
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Nombre"
                  className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-white placeholder-gray-500"
                />
              </div>
              <div className="mb-6">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-white placeholder-gray-500"
                />
              </div>
              <div className="mb-6">
                <textarea
                  placeholder="Mensaje"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-white placeholder-gray-500"
                ></textarea>
              </div>
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Tu Nombre. Todos los derechos
            reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
