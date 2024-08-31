import React from "react";
import Link from "next/link";
import botyLogo from "@/public/botyLogo.png";
import botyLogoN from "@/public/botyLogoNeg.png";
import Image from "next/image";
import { Space_Grotesk, Inter } from "@next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"], // Puedes agregar más subconjuntos si los necesitas
  weight: ["400", "700"], // Puedes ajustar los pesos de la fuente
});

const inter = Inter({
  subsets: ["latin"], // Puedes agregar más subconjuntos si los necesitas
  weight: ["400", "700"], // Puedes ajustar los pesos de la fuente
});

const landing = () => {
  return (
    <>
      <div className="relative h-screen overflow-hidden">
        <div className="block md:hidden md:w-full absolute min-h-screen">
          <img
            src="/imgBoxes.jpg"
            alt="Decorative"
            className="object-cover w-full h-full min-h-screen"
            width="1920"
            height="1080"
            style={{ objectFit: "cover" }}
          />
          <div
            className="absolute inset-0 bg-[#7828C8] opacity-60"
            style={{ mixBlendMode: "overlay" }}
          />
        </div>
        <div className="flex flex-col md:flex-row h-screen">
          <div className="relative hidden md:block md:w-1/2 min-h-screen">
            <img
              src="/imgBoxes.jpg"
              alt="Decorative"
              className="object-cover w-full h-full md:min-h-screen"
              width="1920"
              height="1080"
              style={{ aspectRatio: "1920/1080", objectFit: "cover" }}
            />
            <div
              className="absolute inset-0 bg-[#7828C8] opacity-50"
              style={{ mixBlendMode: "overlay" }}
            />
          </div>
          <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-8 bg-white md:bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center">
            <Image
              alt="Boty"
              src={botyLogo}
              className="w-48 mb-4 z-20 hidden md:block"
            />
            <Image
              alt="Boty"
              src={botyLogoN}
              className="w-48 mb-4 z-20 block md:hidden"
            />
            <h1
              className={`${spaceGrotesk.className} md:text-primary sm:mt-0 mt-2 text-4xl font-bold text-white mb-4 z-20`}
            >
              Bienvenido
            </h1>
            <p
              className={`${inter.className} text-center text-white sm:mt-0 mt-3 md:text-black text-muted-foreground mb-8 z-20 font-normal md:font-semibold`}
            >
              Te ayudamos a mejorar la rentabilidad de tu negocio con
              herramientas que te permiten automatizar tus procesos, para que te
              enfoques en la estrategia y no en la operación
            </p>
            <button className="mb-4 z-20 py-2 sm:mt-0 mt-2 rounded-lg text-md text-white font-semibold bg-[#9B7AF8] px-4">
              ¡Ingresar!
            </button>
            <Link
              href="https://app.boty.cloud/login"
              className={`${inter.className} text-muted-foreground text-white font-light sm:font-bold sm:mt-0 mt-2 md:text-black underline z-20`}
              prefetch={false}
              target="_blank"
              rel="noopener noreferrer"
            >
              ¿No tenés una cuenta aun?
            </Link>
          </div>
          <div className="absolute bottom-0 w-full text-center p-4 h-8 text-white font-semibold bg-[#9B7AF8] z-20 flex items-center justify-center">
            <p
              className={`${inter.className} text-xs text-muted-foreground z-20 py-8`}
            >
              © 2024 Boty. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default landing;
