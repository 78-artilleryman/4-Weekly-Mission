import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { FolderProvider } from "./folder/context/FolderContext";
import Header from "../components/header/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FolderProvider>
      <Header />
      <Component {...pageProps} />
    </FolderProvider>
  );
}
