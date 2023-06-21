import React from "react";
import Image from "next/image";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="container mt-20 mx-auto md:px-28 p-6 bg-blue-500">
      <div className="flex justify-center mb-2">
        <a href="https://github.com/oluwatoyinn">
          <Image
            src="/icons8-github.svg"
            alt="Img Logo"
            className="dark:invert"
            width={50}
            height={10}
            priority
          />
        </a>
        <a href="https://www.linkedin.com/in/ajayioluwatoyin/">
          <Image
            src="/icons8-linkedin.svg"
            alt="Img Logo"
            className="dark:invert"
            width={50}
            height={10}
            priority
          />
        </a>
        <a href="https://twitter.com/ovaTechs">
          <Image
            src="/icons8-twitter.svg"
            alt="Img Logo"
            className="dark:invert"
            width={50}
            height={10}
            priority
          />
        </a>
      </div>
      <h2 className="text-center">Designed By Victor Ajayi @ {year} </h2>
    </div>
  );
};

export default Footer;
