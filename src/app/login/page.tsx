import React from "react";
import Link from "next/link";
import botyLogo from "@/public/botyLogo.png";
import Image from "next/image";
// import imageTest from "@/public/imageTest.jpg";
import { Space_Grotesk } from "@next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"], // Puedes agregar más subconjuntos si los necesitas
  weight: ["400", "700"], // Puedes ajustar los pesos de la fuente
});

const landing = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="hidden md:block md:w-1/2">
        <img
          src="/imageTest.jpg"
          alt="Decorative"
          className="object-cover w-full h-full"
          width="1920"
          height="1080"
          style={{ aspectRatio: "1920/1080", objectFit: "cover" }}
        />
      </div>
      <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-8 bg-white md:bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center">
        <Image alt="Boty" src={botyLogo} className="w-48 mb-4" />
        <h1
          className={`${spaceGrotesk.className} text-4xl font-bold text-primary mb-4`}
        >
          Bienvenido
        </h1>
        <p className="text-center text-muted-foreground mb-8">
          Te ayudamos a mejorar la rentabilidad de tu negocio con herramientas
          que te permiten automatizar tus procesos, para que te enfoques en la
          estrategia y no en la operación
        </p>
        <button className="mb-4">¡Ingresar!</button>
        <Link
          href="#"
          className="text-muted-foreground underline"
          prefetch={false}
        >
          ¿No tenés una cuenta aun?
        </Link>
      </div>
      <div className="absolute bottom-0 w-full text-center p-4 bg-muted">
        <p className="text-xs text-muted-foreground">
          © 2024 Boty. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
};

export default landing;
