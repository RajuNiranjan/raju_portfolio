import NavBar from "@/components/NavBar/NavBar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="w-full">
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
}
