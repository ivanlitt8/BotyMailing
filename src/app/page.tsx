"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import SkipLogo from "@/public/components/icons/SkipLogo";
import HealthLogh from "@/public/components/icons/HealthLogo";
import StockRotationLogo from "@/public/components/icons/StockRotationLogo";
import StockOutLogo from "@/public/components/icons/StockOutLogo";
import closingImage from "@/public/closingImage.png";
import botyLogo from "@/public/botyLogo.png";
import meliLogo from "@/public/meliLogo.svg";
import frame from "@/public/appSlice.svg";
import { Space_Grotesk } from "@next/font/google";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";
import SplitType from "split-type";

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

  useGSAP(() => {
    gsap.to("#text", {
      ease: "power1.inOut",
      opacity: 1,
      y: 0,
    });
    gsap.fromTo(
      "#button",
      {
        x: "-250",
        ease: "sine.out",
      },
      {
        x: "0",
        duration: 0.5,
        ease: "bounce.in",
        opacity: 1,
      }
    );
  }, []);

  useEffect(() => {
    const myText = new SplitType("#textCta", { types: "chars" });
    console.log(myText.chars);

    gsap.from(".char", {
      opacity: 0,
      delay: 0.2,
      y: "-120",
      stagger: 0.05,
      duration: 0.3,
    });
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
      <div className="flex relative">
        <img
          src="/backMan.jpg"
          alt="banner"
          className="w-full hidden xs:block"
        />
        <img
          src="/backManVertical.jpg"
          alt="banner vertical"
          className="w-full block xs:hidden"
        />
        <span
          id="text"
          className={`${spaceGrotesk.className} opacity-0 uppercase xl:text-4xl 2xl:text-6xl border border-1 border-tertiary text-white px-2 py-1 sm:px-4 sm:py-2 rounded-full absolute mx-[5%] mt-[4%] hidden xs:block`}
        >
          sincronización de stock
        </span>
        <div className="xs:hidden absolute flex w-full justify-center mt-16">
          <span
            id="text"
            className={`${spaceGrotesk.className} opacity-0 uppercase rounded-full border border-1 border-tertiary text-white px-2 py-1`}
          >
            sincronización de stock
          </span>
        </div>
        <h1
          id="text"
          className={`${spaceGrotesk.className} opacity-0 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-8xl w-[50%] mt-20 sm:mt-[10%] ml-[5%] absolute z-20 hidden xs:block`}
        >
          <span className="text-tertiary font-semibold">
            Mejorá el manejo <br /> del stock
          </span>
          <span className="text-white">
            &nbsp;de tus <br /> tiendas
          </span>
        </h1>
        <div className="xs:hidden absolute flex w-full justify-center mt-8">
          <h1
            id="text"
            className={`${spaceGrotesk.className} opacity-0 text-4xl mt-20 z-20`}
          >
            <span className="text-tertiary font-semibold">
              Mejorá el manejo <br /> del stock
            </span>
            <span className="text-white">
              &nbsp;de tus <br /> tiendas
            </span>
          </h1>
        </div>
        <div className="absolute mt-[135%] xs:mt-[35%] flex flex-row mx-auto md:mx-[5%] items-center justify-between p-4 bg-white rounded-full shadow-md w-full md:w-3/4 lg:w-2/3 xl:w-6/12 2xl:w-6/12 h-12 md:h-16 lg:h-16 xl:h-24 2xl:h-32 border border-lightgray backdrop-blur-2xl backdrop-brightness-200 shadow-[#804488]">
          <span
            id="textCta"
            className=" text-textprimary font-bold whitespace-nowrap text-sm md:text-md lg:text-xl xl:text-2xl 2xl:text-4xl ml-0 xs:ml-10"
          >
            ¡Activá Boty ahora mismo! →
          </span>
          <a
            id="button"
            href="https://app.boty.cloud/login?utm_medium=facebook_remarketing_milbrands&utm_campaign=facturacion&boty_campaign=sales_billing.3"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-0 flex items-center justify-center font-semibold bg-btnprimary text-white py-1 md:py-2 lg:py-2 px-3 xs:px-4 md:px-4 xl:px-6 2xl:px-8 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:bg-buttonhover hover:scale-105 hover:shadow-lg whitespace-nowrap text-sm sm:text-lg md:text-lg xl:text-2xl 2xl:text-4xl w-auto xl:h-16 2xl:h-20"
          >
            Activar
          </a>
        </div>
        <img
          src="/appSlice.svg"
          alt="frame"
          className="w-1/2 xs:w-1/4 mt-[72%] xs:mt-[5%] ml-[3%] xs:ml-[48%] absolute z-10"
        />
      </div>
      <main className="flex-1">
        <div className="flex flex-col mt-10 md:flex-row justify-between mx-5 sm:mx-8 md:mx-10 lg:mx-14 xl:mx-20 2xl:mx-32 z-30">
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
            <button
              onClick={() => {
                window.open(
                  "https://app.boty.cloud/login?utm_medium=facebook_remarketing_milbrands&utm_campaign=facturacion&boty_campaign=sales_billing.3",
                  "_blank"
                );
              }}
              className="bg-btnprimary rounded-xl md:rounded-xl lg:rounded-xl xl:rounded-3xl 2xl:rounded-3xl text-white xl:text-2xl 2xl:text-4xl font-medium w-auto p-2 md:p-2 lg:p-3 xl:p-4 2xl:p-6 transition-all duration-300 ease-in-out transform hover:bg-buttonhover hover:scale-105 hover:shadow-lg"
            >
              Activá Boty
            </button>
          </div>
          <div className="flex flex-row flex-wrap gap-4 mt-8 justify-center">
            {cardsData.map((card, index) => (
              <div
                key={index}
                className="p-3 md:p-3 lg:p-6 xl:p-6 2xl:p-6 w-full md:w-48 lg:w-64 xl:w-80 2xl:w-80 h-auto 2xl:h-96 bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105 border border-textprimary"
              >
                <div className="flex flex-row sm:flex-col items-center sm:items-start gap-2 sm:gap-0">
                  <div className="card-logo bg-iconbg flex items-center justify-center w-10 h-10 sm:w-16 sm:h-16 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 rounded-full mb-4">
                    {card.logo}
                  </div>
                  <h2
                    className={`${spaceGrotesk.className} lg:text-md xl:text-2xl 2xl:text-3xl text-textprimary font-bold md:h-10 lg:h-10 xl:h-10 2xl:h-10 mb-2 md:mb-6 lg:mb-4 xl:mb-6 2xl:mb-6`}
                  >
                    {card.title}
                  </h2>
                </div>
                <p className="text-sm md:text-xs lg:text-sm xl:text-lg 2xl:text-2xl lg:mt-2 xl:mt-2 2xl:mt-6 font-semibold text-textprimary">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col mt-10 items-center justify-center sm:flex-row sm:justify-between p-2 xl:p-4 2xl:p-6 bg-white rounded-2xl sm:rounded-full shadow-md max-w-full mx-2 sm:mx-10 md:mx-32 border border-lightgray">
          <span className="text-textprimary text-sm sm:text-base lg:text-xl xl:text-2xl 2xl:text-4xl font-bold sm:pl-4 sm:pr-2 text-center sm:text-left mb-2 sm:mb-0 whitespace-nowrap ">
            ¡Activa Boty ahora mismo!
          </span>
          <a
            id="button"
            href="https://app.boty.cloud/login?utm_medium=facebook_remarketing_milbrands&utm_campaign=facturacion&boty_campaign=sales_billing.3"
            target="_blank"
            rel="noopener noreferrer"
            className=" opacity-0 flex items-center text-base lg:text-lg xl:text-2xl 2xl:text-4xl bg-btnprimary text-white font-medium py-2 xl:py-4 2xl:py-4 px-4 lg:px-6 xl:px-6 2xl:px-6 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:bg-buttonhover hover:scale-105 hover:shadow-lg mt-2 sm:mt-0 whitespace-nowrap"
          >
            Empecemos →
          </a>
        </div>
        <div className="text-center pt-6 text-sm font-semibold xl:text-xl 2xl:text-3xl text-textprimary">
          <p>Contratalo desde $30.000 por mes.</p>
        </div>
        <div className="flex justify-end">
          <img
            src="/closingImage.png"
            alt="closing image"
            className=" w-[40%] xs:w-[20%]"
          />
        </div>
        <footer className="w-full bg-btnprimary text-center xs:font-bold text-white py-4 text-xs sm:text-base xl:text-xl 2xl:text-4xl">
          <span>¡Automatizá tu negocio con Boty y ahorrá tiempo y dinero!</span>
        </footer>
      </main>
    </div>
  );
}
