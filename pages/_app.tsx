import "@/styles/globals.css"
import type { AppProps } from "next/app"
import localFont from "next/font/local"

import type { ReactElement, ReactNode } from "react"
import type { NextPage } from "next"

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const myFont = localFont({ src: "./fonts/Strawford-Regular.ttf" })

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <main className={myFont.className}>
      <Component {...pageProps} />
    </main>
  )
}
