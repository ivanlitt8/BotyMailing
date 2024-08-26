import React from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  text: string;
  src: string;
}

const Card: React.FC<CardProps> = ({ title, text, src }) => (
  <div className="bg-white rounded-lg shadow-md p-6 text-center w-64">
    <Image
      src={src}
      alt={title}
      width={48}
      height={48}
      className="mx-auto mb-4"
    />
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{text}</p>
  </div>
);

export default Card;
