"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import SkipLogo from "@/public/components/icons/SkipLogo";
import HealthLogh from "@/public/components/icons/HealthLogo";
import StockRotationLogo from "@/public/components/icons/StockRotationLogo";
import StockOutLogo from "@/public/components/icons/StockOutLogo";
import backgroundMan from "@/public/backgroundMan.jpg";
import closingImage from "@/public/closingImage.png";
import botyLogo from "@/public/botyLogo.png";
import meliLogo from "@/public/meliLogo.svg";
import frame from "@/public/appSlice.svg";
import { Space_Grotesk } from "@next/font/google";

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
      <div className="w-full h-auto flex justify-between items-center">
        <Image
          alt="Boty"
          src={botyLogo}
          className="w-1/3 max-w-xs sm:w-1/6 sm:max-w-none sm:ml-10"
        />
        <Image
          alt="Meli"
          src={meliLogo}
          className="w-1/3 max-w-xs sm:w-1/6 sm:max-w-none"
        />
      </div>
      <div className="flex">
        <Image
          alt="banner"
          src={backgroundMan}
          style={{
            width: "100%",
            height: "auto",
          }}
        />
        <span
          className={`${spaceGrotesk.className} uppercase xl:text-4xl 2xl:text-6xl absolute border border-1 ml-[5%] mt-[4%] border-tertiary text-white px-2 py-1 sm:px-4 sm:py-2 rounded-full`}
        >
          sincronización de stock
        </span>
        <h1
          className={`${spaceGrotesk.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-8xl w-[50%] mt-20 sm:mt-[10%] ml-[5%] absolute z-20`}
        >
          <span className="text-tertiary font-semibold">
            Mejorá el manejo <br /> del stock
          </span>
          <span className="text-white">
            &nbsp;de tus <br /> tiendas
          </span>
        </h1>
        {/* <div className="absolute mt-[35%] flex flex-row mx-auto md:mx-[5%] items-center justify-between p-4 bg-white rounded-full shadow-md md:w-3/4 lg:w-2/3 xl:w-6/12 2xl:w-6/12 h-16 xl:h-24 2xl:h-32 border border-lightgray">
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
        </div> */}
        <Image
          alt="Frame App"
          src={frame}
          className="w-1/4 mt-[5%] ml-[48%] absolute z-10"
        />
      </div>
      <main className="flex-1">
        <div className="flex flex-col mt-10 md:flex-row justify-between mx-5 sm:mx-8 md:mx-10 lg:mx-14 xl:mx-20 2xl:mx-32">
          <div className="w-full md:w-2/5 2xl:w-2/5">
            <h3
              className={`${spaceGrotesk.className} text-2xl md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-7xl font-bold text-textprimary`}
            >
              ¿Cansado de perder tiempo gestionando tu inventario?
            </h3>
            <p className="md:text-sm lg:text-md xl:text-xl 2xl:text-4xl font-medium my-5 md:my-10 lg:my-10 xl:my-10 2xl:my-10">
              Boty te permite concentrarte en lo que realmente importa: hacer
              crecer tu negocio. Olvídate de las hojas de cálculo y las
              actualizaciones manuales. Con Boty, tenés un control total de tu
              stock en tiempo real.
            </p>
            <button className="bg-btnprimary rounded-xl md:rounded-xl lg:rounded-xl xl:rounded-3xl 2xl:rounded-3xl text-white xl:text-2xl 2xl:text-4xl font-medium w-auto p-2 md:p-2 lg:p-3 xl:p-4 2xl:p-6 hover:bg-buttonhover">
              Activá Boty
            </button>
          </div>
          <div className="flex flex-row flex-wrap gap-4 mt-8 justify-center">
            {cardsData.map((card, index) => (
              <div
                key={index}
                className="sm:p-3 md:p-3 lg:p-6 xl:p-6 2xl:p-6 w-full md:w-48 lg:w-64 xl:w-80 2xl:w-80 h-auto 2xl:h-96 bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105 border border-textprimary"
              >
                <div className="flex flex-row sm:flex-col">
                  <div className="card-logo bg-iconbg flex items-center justify-center sm:w-16 sm:h-16 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 rounded-full mb-4">
                    {card.logo}
                  </div>
                  <h2
                    className={`${spaceGrotesk.className} lg:text-md xl:text-2xl 2xl:text-3xl text-textprimary font-bold md:h-10 lg:h-10 xl:h-10 2xl:h-10 mb-2 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-6`}
                  >
                    {card.title}
                  </h2>
                </div>
                <p className="md:text-xs lg:text-sm xl:text-lg 2xl:text-2xl lg:mt-2 xl:mt-2 2xl:mt-10 font-semibold text-textprimary">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col mt-10 items-center justify-center sm:flex-row sm:justify-between md:p-2 lg:p-2 xl:p-4 2xl:p-6 bg-white rounded-2xl sm:rounded-full shadow-md max-w-full mx-2 sm:mx-10 md:mx-32 border border-lightgray">
          <span className="text-textprimary lg:text-xl xl:text-2xl 2xl:text-4xl text-sm sm:text-base font-bold sm:pl-4 sm:pr-2 text-center sm:text-left mb-2 sm:mb-0 whitespace-nowrap ">
            ¡Activa Boty ahora mismo!
          </span>
          <a
            id="button"
            href="https://app.boty.cloud/hello?utm_medium=facebook_remarketing_milbrands&utm_campaign=facturacion&boty_campaign=sales_billing.3"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-base lg:text-lg xl:text-2xl 2xl:text-4xl bg-btnprimary text-white font-medium md:py-2 lg:py-2 xl:py-4 2xl:py-4 md:px-2 lg:px-6 xl:px-6 2xl:px-6 rounded-full shadow-lg hover:bg-buttonhover mt-2 sm:mt-0 whitespace-nowrap"
          >
            Empecemos →
          </a>
        </div>
        <div className="text-center pt-6 text-sm sm:font-semibold font-bold xl:text-xl 2xl:text-3xl text-textprimary">
          <p>Contratalo desde $30.000 por mes.</p>
        </div>
        <div className="flex justify-end">
          <Image alt="closing image" src={closingImage} className="w-[20%]" />
        </div>
        <footer className="w-full bg-btnprimary text-center font-bold text-white py-4 text-xs sm:text-base xl:text-xl 2xl:text-4xl">
          <span>¡Automatizá tu negocio con Boty y ahorrá tiempo y dinero!</span>
        </footer>
      </main>
    </div>
  );
}
