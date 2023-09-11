import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from "@/contexts/cart/CartContext";
import { OverlayTrigger, Spinner, SSRProvider, Tooltip } from "react-bootstrap";
import Navbar from "@/components/NavBar/Navbar";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import '../styles/estilos.css'
import Head from "next/head";
import { EnvioProvider } from "@/contexts/envio/EnvioContext";
import { UserProvider } from "@/contexts/user/UserContext";
import Footer from "@/components/Footer";
import Script from "next/script";
import '../styles/temas.css';

import { Analytics } from '@vercel/analytics/react';

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })



export default function App({ Component, pageProps }) {

  const router = useRouter()
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    const handleStart = (url) => {
      setCargando(true);
      NProgress.start();
    }

    const handleStop = () => {
      setCargando(false);
      NProgress.done();
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  return (
    <main className={inter.className}>
    <Head>
      <link rel="icon" type="image/icon" href="/logo.ico" />
    </Head>

    <SSRProvider>
      <CartProvider>
        <UserProvider>
          <EnvioProvider>
            {/* <Navbar /> */}
              <Component {...pageProps} />
            <Footer />
          </EnvioProvider>
        </UserProvider>
      </CartProvider>
    </SSRProvider>
    </main>
  )
}