import '@/styles/globals.css'
// import 'antd/dist/reset.css'
// import 'semantic-ui-css/semantic.min.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from "@/redux/store"
import Head from 'next/head'
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Head>
          <link rel="icon" href="/icon.png" />
        </Head>
        <ThemeProvider enableSystem={true} attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  )
}
