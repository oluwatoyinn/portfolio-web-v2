import "@/styles/globals.css";
import { ThemeProvider } from "@/components/DarkMode/themeContext";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <div className="bg-dark dark:bg-white">
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
