"use client";
import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const GoUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Función para manejar el scroll
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    // Muestra el botón si se ha desplazado más de 100 píxeles
    if (scrollTop > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Función para hacer scroll hacia arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Desplazamiento suave
    });
  };

  useEffect(() => {
    // Agrega el event listener al montar el componente
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Limpia el event listener al desmontar el componente
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-[#FCDC4D] text-white p-3 rounded-full z-50 shadow-lg hover:bg-[#FCDC4D]/90 transition duration-300"
        >
          <ChevronUp className="text-black" width={20} height={20} />
        </button>
      )}
    </>
  );
};

export default GoUp;
