import "../styles/globals.css"
import type { AppProps } from "next/app"
import localFont from "next/font/local"

const myFont = localFont({
  src: "./strawford-regular-webfont.woff2",
  weight: "500",
})
// Font files can be colocated inside of `pages`

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className={myFont.className}>
        <Component {...pageProps} />
      </main>
    </>
  )
}
