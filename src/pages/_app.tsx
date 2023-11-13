import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Provider } from 'react-redux'
import store from "@/redux/store"
import { ThemeProvider } from "next-themes";
import { Analytics } from '@vercel/analytics/react'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const path = router.asPath.substring(1)
  const capitalizedPath = path
    .split('/')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('/');

  return (
    <>
      <Provider store={store}>
        <Head>
          <link rel="icon" href="/icon.png" />
          <title>Le Ha Gia Bao | {capitalizedPath === "" ? "Home" : capitalizedPath} </title>
        </Head>
        <ThemeProvider enableSystem={true} attribute="class">
          <Component {...pageProps} />
          <Analytics />
        </ThemeProvider>
      </Provider>
    </>
  )
}
