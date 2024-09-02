"use client";
import React from "react";
import Link from "next/link";
import { Space_Grotesk, Inter } from "@next/font/google";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"], // Puedes agregar más subconjuntos si los necesitas
  weight: ["400", "700"], // Puedes ajustar los pesos de la fuente
});

const inter = Inter({
  subsets: ["latin"], // Puedes agregar más subconjuntos si los necesitas
  weight: ["400", "700"], // Puedes ajustar los pesos de la fuente
});

export default function Login() {
  useGSAP(() => {
    gsap.fromTo(
      "#button",
      {
        y: -50,
      },
      {
        ease: "bounce.in",
        opacity: 1,
        duration: 0.5,
        y: 0,
      }
    );
  }, []);

  useGSAP(() => {
    gsap.to("#text", {
      ease: "power1.inOut",
      opacity: 1,
      //duration: 0.5,
      y: 0,
    });
  }, []);

  return (
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
      <div className="flex flex-col md:flex-row min-h-screen justify-center">
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
        <div className="flex flex-col items-center justify-center gap-3 md:gap-4 w-full md:w-1/2 p-8 bg-white bg-cover bg-center">
          <img
            alt="Boty"
            src="/botyLogo.png"
            className="w-48 mb-4 z-20 hidden md:block"
          />
          <img
            alt="Boty"
            src="/botyLogoNeg.png"
            className="w-48 mb-0 sm:mb-4 z-20 block md:hidden"
          />
          <h1
            className={`${spaceGrotesk.className} md:text-primary sm:mt-0 mt-2 text-4xl font-bold text-white mb-4 z-20`}
          >
            Bienvenido
          </h1>
          <p
            id="text"
            className={`${inter.className} opacity-0 text-center text-white sm:mt-0 my-3 md:text-black text-muted-foreground z-20 text-sm md:text-md font-normal md:font-semibold`}
          >
            Te ayudamos a mejorar la rentabilidad de tu negocio con herramientas
            que te permiten automatizar tus procesos, para que te enfoques en la
            estrategia y no en la operación
          </p>
          <button
            onClick={() => {
              window.open(
                "https://app.boty.cloud/login?utm_medium=facebook_remarketing_milbrands&utm_campaign=facturacion&boty_campaign=sales_billing.3",
                "_blank"
              );
            }}
            id="button"
            className="opacity-0 mb-2 sm:mb-4 z-20 py-2 sm:mt-0 mt-2 rounded-lg text-md text-white font-semibold bg-btnprimary  transition-all duration-300 ease-in-out transform hover:bg-buttonhover hover:scale-105 hover:shadow-lg px-4"
          >
            ¡Ingresar!
          </button>
          <Link
            href="https://app.boty.cloud/login"
            className={`${inter.className} text-muted-foreground text-white font-light sm:font-medium sm:mt-0 mt-2 md:text-black underline z-20`}
            prefetch={false}
            target="_blank"
            rel="noopener noreferrer"
          >
            ¿No tenés una cuenta aun?
          </Link>
          <div className="flex justify-end z-20">
            <img
              src="/closingImage.png"
              alt="closing image"
              className=" w-[40%] xs:w-[30%] hidden md:block"
            />
            <img
              src="/closingImageNeg.png"
              alt="closing image"
              className=" w-[40%] xs:w-[30%] block md:hidden"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full text-center p-4 h-8 text-white font-semibold bg-[#9B7AF8] z-20 flex items-center justify-center">
        <p
          className={`${inter.className} text-xs text-muted-foreground z-20 py-8`}
        >
          © 2024 Boty. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
}
