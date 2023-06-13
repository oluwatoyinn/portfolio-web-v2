import Image from "next/image";
import CodeBracket from "@/components/icons/CodeBracket";
import Typed from "react-typed";

const Social = () => {
  return (
    <div>
      <section id="slider">
        <div className="container mt-20 mx-auto md:px-28">
          <CodeBracket />
        </div>
        <div className="container flex flex-col-reverse items-center px-6 justify-between mx-auto space-y-0 md:flex-row md:space-y-0 md:px-28">
          <div className="flex flex-col space-y-12">
            <p className=" text-center md:text-5xl text-2xl md:text-left dark:text-gray-500">
              Hey there, I am{" "}
              <span className="text-blue-600 font-bold"> Victor Ajayi.</span> <br/>
              <Typed
                strings={["A Software Frontend Engineer", 'I love software development']}
                typeSpeed={120}  
                loop
              />
              {/* <span className="md:text-5xl text-2xl">
                {" "}
                A Software Frontend Engineer{" "}
              </span> */}
            </p>
            <div className="flex">
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

              <Image
                src="/icons8-twitter.svg"
                alt="Img Logo"
                className="dark:invert"
                width={50}
                height={10}
                priority
              />
            </div>
          </div>
          <div className="">
            <Image
              src="/programming.svg"
              alt="Img Logo"
              className="dark:invert"
              width={500}
              height={500}
              priority
            />
          </div>
        </div>
        <div className="container mx-auto md:px-28">
          <CodeBracket />
        </div>
        {/* <p className="text-white md:text-4xl mt-36"> hello </p> */}
      </section>
    </div>
  );
};

export default Social;
