import CodeBracket from "@/components/icons/CodeBracket";
import Image from "next/image";
import { useParallax } from "react-scroll-parallax";

const AboutLanguage = () => {
  return (
    <>
      <section id="about">
        <div className="container mt-24 mx-auto md:px-28">
          <CodeBracket />
        </div>
        <div className="container flex flex-col-reverse items-center px-6 justify-between mx-auto space-y-0 md:flex-row md:space-y-0 md:px-28">
          <div className="w-1/2 text-justify mr-10">
            <h2 className="bg-blue-600 p-3 text-4xl mb-6 mt-6">About Me</h2>
            <p>
              I am a passionate researcher, Frontend Engineer with hands-on
              experience in identifying web-based user interactions along with
              designing and implementing highly–responsive user interfaces.
              Proficient in translating designs and wireframes into high-quality
              code and writing application interface code using JavaScript and
              React Js workflows. Adept at monitoring and maintaining frontend
              performance, troubleshooting and debugging. I have worked on
              applications such as Social Commerce, Payment Collection Platform,
              Fraud Engine, Management Systems etc. Skills: React and its
              libraries, Redux, NextJs, JavaScript, Typescript, Tailwind,
              React-Query, Styled-Components, Material-UI, Bootstrap, HTML5,
              CSS3 etc.
            </p>
          </div>
          <div className="w-1/2">
            <h2 className="text-blue-400 text-xl font-bold mb-6">
              Here are some few technologies I currently use to create amazing
              things on the web.
            </h2>
            <div className=" flex justify-between gap-8">
              <Image
                src="/react.png"
                alt="Img Logo"
                className="dark:invert"
                width={100}
                height={15}
                priority
              />
              <Image
                src="/next.png"
                alt="Img Logo"
                className="dark:invert"
                width={100}
                height={15}
                priority
              />
              <Image
                src="/ts.png"
                alt="Img Logo"
                className="dark:invert"
                width={100}
                height={15}
                priority
              />
              <Image
                src="/js.png"
                alt="Img Logo"
                className="dark:invert"
                width={100}
                height={15}
                priority
              />
            </div>
            <div className=" flex justify-between gap-8 mt-6">
              <Image
                src="/query.png"
                alt="Img Logo"
                className="dark:invert"
                width={100}
                height={15}
                priority
              />
              <Image
                src="/styled.png"
                alt="Img Logo"
                className="dark:invert"
                width={100}
                height={15}
                priority
              />
              <Image
                src="/git.png"
                alt="Img Logo"
                className="dark:invert"
                width={100}
                height={15}
                priority
              />
              <Image
                src="/npm.png"
                alt="Img Logo"
                className="dark:invert"
                width={100}
                height={15}
                priority
              />
            </div>
          </div>
        </div>
        <div className="container mt-24 mx-auto md:px-28">
          <CodeBracket />
        </div>
        <div className="h-72">Hello</div>
      </section>
    </>
  );
};

export default AboutLanguage;
