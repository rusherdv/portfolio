"use client";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesComponent = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        particles: {
          number: { value: 50 },
          size: { value: 3 },
          color: { value: "#FCDC4D" },
          opacity: { value: 0.5 },
          links: {
            enable: true,
            color: "#af9833",
            distance: 150,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none", // Para permitir movimiento libre
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse", // Cambia el comportamiento al acercar el cursor
            },
          },
          modes: {
            repulse: {
              distance: 100, // Ajusta esta distancia según prefieras la intensidad
              duration: 0.4,
            },
          },
        },
      }}
      className="absolute inset-0 z-0"
    />
  );
};

export default ParticlesComponent;
