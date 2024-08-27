"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import SkipLogo from "@/public/components/icons/SkipLogo";
import HealthLogh from "@/public/components/icons/HealthLogo";
import StockRotationLogo from "@/public/components/icons/StockRotationLogo";
import StockOutLogo from "@/public/components/icons/StockOutLogo";
import heroBanner from "@/public/heroBanner.jpg";
import { Space_Grotesk } from "@next/font/google";
//import { useRouter, usePathname } from "next/navigation";
//import * as gtag from '@/gtag.js';

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"], // Puedes agregar más subconjuntos si los necesitas
  weight: ["400", "700"], // Puedes ajustar los pesos de la fuente
});

const cardsData = [
  {
    title: "Crea tu listado de producto",
    text: "Boty va a crear tu listado de productos en base a la información de tus publicaciones al instante.",
    logo: <SkipLogo />,
  },
  {
    title: "Carga el Stock",
    text: "Carga el stock en tu listado de productos. Boty va a impactar las unidades disponibles en todas las publicaciones.",
    logo: <StockRotationLogo />,
  },
  {
    title: "Evitá potenciales quiebres de stock",
    text: "Evita faltantes de stock de tus productos con alertas tempranas gracias a Boty.",
    logo: <StockOutLogo />,
  },
  {
    title: "Salud de las publicaciones",
    text: "Mejorá la salud de tus publicaciones completando la ficha técnica de tus productos.",
    logo: <HealthLogh />,
  },
];

export default function Home() {
  useEffect(() => {
    document.title = "Boty - Sincronización Stock";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex">
        <Image
          alt="banner"
          src={heroBanner}
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>
      <main className="flex-1">
        <div className="flex flex-row mx-auto md:ml-32 items-center justify-between p-4 bg-white rounded-full shadow-md w-96 lg:w-2/3 xl:w-6/12 2xl:w-6/12 h-16 xl:h-24 2xl:h-32 border border-lightgray relative bottom-10">
          <span className="text-textprimary text-base font-bold whitespace-nowrap lg:text-xl xl:text-2xl 2xl:text-4xl ml-10">
            ¡Activá Boty ahora mismo! →
          </span>
          <a
            id="button"
            href="https://app.boty.cloud/hello?utm_medium=facebook_remarketing_milbrands&utm_campaign=facturacion&boty_campaign=sales_billing.3"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center font-semibold bg-btnprimary text-white py-2 px-4 rounded-full shadow-lg hover:bg-buttonhover whitespace-nowrap text-lg xl:text-2xl 2xl:text-4xl w-40 xl:h-16 2xl:h-20"
          >
            Activar
          </a>
        </div>
        <div className="flex flex-col md:flex-row md:justify-around lg:mx-14 xl:mx-40 2xl:mx-32">
          <div className="w-full md:w-2/5 2xl:w-2/5">
            <h3
              className={`${spaceGrotesk.className} lg:text-3xl xl:text-5xl 2xl:text-7xl font-bold text-textprimary`}
            >
              ¿Cansado de perder tiempo gestionando tu inventario?
            </h3>
            <p className="lg:text-md xl:text-xl 2xl:text-4xl font-medium my-10">
              Boty te permite concentrarte en lo que realmente importa: hacer
              crecer tu negocio. Olvídate de las hojas de cálculo y las
              actualizaciones manuales. Con Boty, tenés un control total de tu
              stock en tiempo real.
            </p>
            <button className="bg-btnprimary lg:rounded-xl xl:rounded-3xl 2xl:rounded-3xl text-white xl:text-2xl 2xl:text-4xl font-medium w-auto lg:p-3 xl:p-4 2xl:p-6">
              Activá Boty
            </button>
          </div>
          <div className="flex flex-row flex-wrap gap-4 mt-8 justify-center">
            {cardsData.map((card, index) => (
              <div
                key={index}
                className="card p-6 w-64 2xl:w-80 h-auto 2xl:h-96 bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105"
              >
                <div className="card-logo bg-iconbg flex items-center justify-center w-14 h-14 rounded-full mb-4">
                  {card.logo}
                </div>
                <h2
                  className={`${spaceGrotesk.className} text-lg xl:text-2xl 2xl:text-3xl text-textprimary font-bold h-10 mb-6`}
                >
                  {card.title}
                </h2>
                <p className="text-base lg:text-sm xl:text-lg 2xl:text-2xl lg:mt-2 xl:mt-2 2xl:mt-10 font-semibold text-textprimary">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col mt-10 items-center justify-center sm:flex-row sm:justify-between lg:p-2 xl:p-4 2xl:p-6 bg-white rounded-2xl sm:rounded-full shadow-md max-w-full mx-2 sm:mx-10 md:mx-32 border border-lightgray">
          <span className="text-textprimary lg:text-xl xl:text-2xl 2xl:text-4xl text-sm sm:text-base font-bold sm:pl-4 sm:pr-2 text-center sm:text-left mb-2 sm:mb-0 whitespace-nowrap">
            ¡Activa Boty ahora mismo!
          </span>
          <a
            id="button"
            href="https://app.boty.cloud/hello?utm_medium=facebook_remarketing_milbrands&utm_campaign=facturacion&boty_campaign=sales_billing.3"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center xl:text-2xl 2xl:text-4xl bg-btnprimary text-white font-medium lg:py-2 xl:py-4 2xl:py-4  px-6 rounded-full shadow-lg hover:bg-buttonhover mt-2 sm:mt-0 whitespace-nowrap text-base sm:text-lg"
          >
            Empecemos →
          </a>
        </div>
        <div className="text-center pt-6 text-sm sm:font-semibold font-bold xl:text-xl 2xl:text-3xl text-textprimary">
          <p>Contratalo desde $30.000 por mes.</p>
        </div>
        <footer className="w-full bg-btnprimary text-center mt-16 font-bold text-white py-4 text-xs sm:text-base xl:text-xl 2xl:text-4xl">
          <span>¡Automatizá tu negocio con Boty y ahorrá tiempo y dinero!</span>
        </footer>
      </main>
    </div>
  );
}
