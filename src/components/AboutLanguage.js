import CodeBracket from "@/components/icons/CodeBracket";
import Image from "next/image"; 

const AboutLanguage = () => {
  return (
    <>
      <section id="about" className="mt-24 md:px-20">
        <div className="container mx-auto px-4 md:px-8">
          <CodeBracket />
        </div>
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <h2 className="bg-blue-600 p-3 text-4xl mb-6 mt-6">About Me</h2>
            <p className="text-justify">
              I am a passionate researcher, Frontend Engineer with hands-on
              experience in identifying web-based user interactions along with
              designing and implementing highly-responsive user interfaces.
              Proficient in translating designs and wireframes into high-quality
              code and writing application interface code using JavaScript and
              React Js workflows. Adept at monitoring and maintaining frontend
              performance, troubleshooting, and debugging. I have worked on
              applications such as Social Commerce, Payment Collection Platform,
              Fraud Engine, Management Systems, etc. Skills: React and its
              libraries, Redux, Next.js, JavaScript, TypeScript, Tailwind,
              React-Query, Styled-Components, Material-UI, Bootstrap, HTML5,
              CSS3, etc.
            </p>
          </div>
          <div className="md:w-1/2 md:ml-8">
            <h2 className="text-blue-400 text-xl font-bold mb-6 md:ml-16">
              Here are some few technologies I currently use to create amazing
              things on the web.
            </h2>
            <div className="flex flex-wrap justify-center gap-16">
              <Image
                src="/react.png"
                alt="React Logo"
                className="dark:invert"
                width={60}
                height={5}
                priority
              />
              <Image
                src="/next.png"
                alt="Next.js Logo"
                className="dark:invert"
                width={60}
                height={5}
                priority
              />
              <Image
                src="/ts.png"
                alt="TypeScript Logo"
                className="dark:invert"
                width={60}
                height={5}
                priority
              />
              <Image
                src="/js.png"
                alt="JavaScript Logo"
                className="dark:invert"
                width={60}
                height={5}
                priority
              />
              <Image
                src="/query.png"
                alt="React-Query Logo"
                className="dark:invert"
                width={60}
                height={5}
                priority
              />
              <Image
                src="/styled.png"
                alt="Styled-Components Logo"
                className="dark:invert"
                width={60}
                height={5}
                priority
              />
              <Image
                src="/git.png"
                alt="Git Logo"
                className="dark:invert"
                width={60}
                height={5}
                priority
              />
              <Image
                src="/npm.png"
                alt="npm Logo"
                className="dark:invert"
                width={60}
                height={5}
                priority
              />
              <Image
                src="/css.png"
                alt="npm Logo"
                className="dark:invert"
                width={60}
                height={5}
                priority
              />
              <Image
                src="/tailwind.png"
                alt="npm Logo"
                className="dark:invert"
                width={60}
                height={5}
                priority
              />
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 md:px-8">
          <CodeBracket />
        </div>
      </section>
    </>
  );
};

export default AboutLanguage;
