"use client";
import Image from "next/image";
import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Boty - Facturación"; // Cambia aquí por el nuevo título que desees
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-yellow-300 w-full font-semibold text-xs sm:text-sm h-6 text-black flex items-center justify-center">
        <span> Promoción módulo facturación (7 días sin costo)</span>
      </div>
      <main className="flex-1">
        <div className="flex flex-col items-center sm:flex-row sm:justify-center sm:items-start mt-10">
          <Image
            src="/boty.svg"
            alt="Boty Logo"
            width={100}
            height={24}
            priority
          />
          <div className="text-center sm:text-left sm:ml-8 ml-0 max-w-screen-md">
            <h1 className="text-[#6218AB] uppercase font-bold text-4xl sm:text-5xl md:text-6xl">
              bienvenido a boty
            </h1>
            <p className="text-[#6218AB] font-bold text-lg sm:text-xl md:text-2xl mt-2">
              Utilizamos la tecnología para desarrollar herramientas que
              impulsen tu negocio.
            </p>
          </div>
        </div>
        <div className="bg-[#6218AB] max-w-screen-md mx-10 sm:mx-auto rounded-xl mt-10 p-6 sm:p-10 flex items-center justify-center text-center">
          <p className="font-bold text-white text-center text-md sm:text-xl">
            Te ayudamos a mejorar la rentabilidad de tu negocio con herramientas
            que te permiten automatizar tus procesos, para que te enfoques en la
            estrategia y no en la operación.
          </p>
        </div>
        <div className="mt-10 text-lg sm:text-xl md:text-2xl text-[#041B3E] text-left sm:text-center mx-4 sm:mx-10">
          <span className="font-medium">
            Conocé cómo nuestro módulo de{" "}
            <strong>Gestión Automática de Facturación puede ayudarte:</strong>
          </span>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-2 my-10 mx-4 sm:mx-10">
          <div className="w-full sm:w-1/3 text-[#041B3E] bg-[#FF6C7A] rounded-lg p-4 sm:p-6">
            <div className="mr-4">
              <Image
                src="/orderIcon.svg"
                alt="Facturación Automática"
                width={48}
                height={48}
              />
            </div>
            <h3 className="font-bold text-lg my-2">
              1. Facturación Automática
            </h3>
            <p className="text-base font-semibold my-2">
              Realiza la facturación de tus ventas de forma centralizada,
              automatizada y masiva.
            </p>
          </div>
          <div className="bg-[#FFAE5E] w-full sm:w-1/3 text-[#041B3E] rounded-lg p-4 sm:p-6">
            <div className="mr-4">
              <Image
                src="/mailIcon.svg"
                alt="Facturación Automática"
                width={48}
                height={48}
              />
            </div>
            <h3 className="text-lg font-bold my-2">
              2. Envía tus Comprobantes
            </h3>
            <p className="text-base font-semibold my-2">
              Asegurate de enviarle adjuntar la factura de compra a los
              clientes.
            </p>
          </div>
          <div className="bg-[#66BEFE] text-[#041B3E] w-full sm:w-1/3 shadow-md rounded-lg p-4 sm:p-6">
            <div className="mr-4">
              <Image
                src="/timeIcon.svg"
                alt="Facturación Automática"
                width={48}
                height={48}
              />
            </div>
            <h3 className="text-lg font-bold my-2">
              3. Procesos Rápidos y Eficientes
            </h3>
            <p className=" text-base font-semibold my-2">
              Ahorra tiempos en el proceso de emisión y envío de facturas.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-between p-4 bg-white rounded-2xl sm:rounded-full shadow-md max-w-full mx-2 sm:mx-10 md:mx-32 border border-[#D9D9D9]">
          <span className="text-[#041B3E] text-sm sm:text-base font-bold sm:pl-4 sm:pr-2 text-center sm:text-left mb-2 sm:mb-0 whitespace-nowrap">
            Probá Boty ahora mismo (7 días sin costo)
          </span>
          <a
            href="https://app.boty.cloud/hello?utm_medium=facebook_remarketing_milbrands&utm_campaign=facturacion&boty_campaign=sales_billing.3"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-[#A58EFF] text-white font-medium py-2 px-4 rounded-full shadow-lg hover:bg-[#8a6cec] mt-2 sm:mt-0 whitespace-nowrap text-base sm:text-lg"
          >
            Empecemos →
          </a>
        </div>
        <div className="text-center pt-6 text-xs sm:font-semibold font-bold">
          <p>
            *Contrata Boty desde $16.000 por mes y te bonificamos 7 días para
            que puedas probar la herramienta.
          </p>
        </div>
        <footer className="w-full bg-[#6218AB] text-center mt-16 font-bold text-white py-4 text-xs sm:text-base">
          <span>¡Automatizá tu negocio con Boty y ahorrá tiempo y dinero!</span>
        </footer>
      </main>
    </div>
  );
}
