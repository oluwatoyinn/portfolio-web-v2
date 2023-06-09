import "@/styles/globals.css";
import 'leaflet/dist/leaflet.css'; 
import { ParallaxProvider } from "react-scroll-parallax";

export default function App({ Component, pageProps }) {
  return ( 
      <ParallaxProvider>
        <div className="bg-dark dark:bg-white">
          <Component {...pageProps} />
        </div>
      </ParallaxProvider> 
  );
}
