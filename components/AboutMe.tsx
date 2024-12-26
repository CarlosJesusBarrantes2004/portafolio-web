import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <section className="min-h-screen">
      <div>
        <p>
          Soy un desarrollador web en formación apasionado por crear
          aplicaciones funcionales y modernas. Me especializo en el desarrollo
          full stack utilizando tecnologías como React, Next.js, Express y
          TypeScript.
        </p>
        <p>
          Me gusta construir soluciones que combinan diseño y funcionalidad.
          Tengo experiencia en proyectos tanto del lado del frontend como del
          backend, y disfruto trabajar en equipo para resolver problemas
          técnicos.
        </p>
        <p>
          Mi objetivo es crecer como desarrollador web full stack, contribuir a
          proyectos innovadores y continuar aprendiendo las últimas tecnologías
          del ecosistema JavaScript.
        </p>
        <p>
          Actualmente estoy finalizando mi formación en Ingeniería de Sistemas,
          lo que complementa mi experiencia práctica en el desarrollo de
          aplicaciones web.
        </p>
      </div>
      <div>
        {/**Mi imagen */}
        <Image
          src={"/carlos-barrantes.jpg"}
          alt=""
          width={32}
          height={32}
        ></Image>
      </div>
    </section>
  );
};

export default AboutMe;
