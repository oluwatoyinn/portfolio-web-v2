import "@/styles/globals.css";
import { ThemeProvider } from "@/components/DarkMode/themeContext";
import { ParallaxProvider } from "react-scroll-parallax";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <ParallaxProvider>
        <div className="bg-dark dark:bg-white">
          <Component {...pageProps} />
        </div>
      </ParallaxProvider>
    </ThemeProvider>
  );
}
