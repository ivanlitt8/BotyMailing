"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import SkipLogo from "@/public/components/icons/SkipLogo";
import HealthLogh from "@/public/components/icons/HealthLogo";
import StockRotationLogo from "@/public/components/icons/StockRotationLogo";
import StockOutLogo from "@/public/components/icons/StockOutLogo";
import heroBanner from "@/public/heroBanner.jpg";

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
        <div className="flex flex-col ml-20 items-center justify-center sm:flex-row sm:justify-between p-4 bg-white rounded-2xl sm:rounded-full shadow-md w-1/2 h-16 border border-lightgray relative bottom-5">
          <span className="text-textprimary text-sm sm:text-base font-bold sm:pl-4 sm:pr-2 text-center sm:text-left mb-2 sm:mb-0 whitespace-nowrap">
            ¡Activá Boty ahora mismo! →
          </span>
          <a
            id="button"
            href="https://app.boty.cloud/hello?utm_medium=facebook_remarketing_milbrands&utm_campaign=facturacion&boty_campaign=sales_billing.3"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-btnprimary text-white font-medium py-2 px-4 rounded-full shadow-lg hover:bg-buttonhover mt-2 sm:mt-0 whitespace-nowrap text-base sm:text-lg"
          >
            Nuevo
          </a>
        </div>
        <div className="flex flex-col md:flex-row md:justify-around mx-10">
          <div className="w-full md:w-2/5">
            <h3 className="text-5xl font-bold text-textprimary">
              ¿Cansado de perder tiempo gestionando tu inventario?
            </h3>
            <p className="w-full md:w-2/3 text-xl font-medium my-10">
              Boty te permite concentrarte en lo que realmente importa: hacer
              crecer tu negocio. Olvídate de las hojas de cálculo y las
              actualizaciones manuales. Con Boty, tenés un control total de tu
              stock en tiempo real.
            </p>
            <button className="bg-btnprimary rounded-lg text-white text-lg font-medium w-48 p-3">
              Accedé al módulo
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 md:mt-0">
            {cardsData.map((card, index) => (
              <div
                key={index}
                className="card p-6 w-full sm:w-64 h-72 bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105"
              >
                <div className="card-logo bg-iconbg flex items-center justify-center w-14 h-14 rounded-full mb-4">
                  {card.logo}
                </div>
                <h2 className="text-lg text-textprimary font-bold h-10 mb-6">
                  {card.title}
                </h2>
                <p className="text-base font-medium text-textprimary">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col mt-10 items-center justify-center sm:flex-row sm:justify-between p-4 bg-white rounded-2xl sm:rounded-full shadow-md max-w-full mx-2 sm:mx-10 md:mx-32 border border-lightgray">
          <span className="text-textprimary text-sm sm:text-base font-bold sm:pl-4 sm:pr-2 text-center sm:text-left mb-2 sm:mb-0 whitespace-nowrap">
            ¡Activa Boty ahora mismo!
          </span>
          <a
            id="button"
            href="https://app.boty.cloud/hello?utm_medium=facebook_remarketing_milbrands&utm_campaign=facturacion&boty_campaign=sales_billing.3"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-btnprimary text-white font-medium py-2 px-4 rounded-full shadow-lg hover:bg-buttonhover mt-2 sm:mt-0 whitespace-nowrap text-base sm:text-lg"
          >
            Empecemos →
          </a>
        </div>
        <div className="text-center pt-6 text-sm sm:font-semibold font-bold text-textprimary">
          <p>Contratalo desde $30.000 por mes.</p>
        </div>
        <footer className="w-full bg-btnprimary text-center mt-16 font-bold text-white py-4 text-xs sm:text-base">
          <span>¡Automatizá tu negocio con Boty y ahorrá tiempo y dinero!</span>
        </footer>
      </main>
    </div>
  );
}
