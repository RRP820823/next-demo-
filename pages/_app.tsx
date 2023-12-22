import "@/styles/globals.css"
import localFont from "next/font/local"
import type { AppProps } from "next/app"
// const myFont = localFont({
//   src: "../public/Dank Mono Italic [TheFontsMaster.com].otf",
//   weight: "900",
// })

const myFont = localFont({
  src: [
    {
      path: "../public/Dank Mono Italic [TheFontsMaster.com].otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/Dank Mono Regular [TheFontsMaster.com].otf",
      weight: "500",
      style: "italic",
    },
  ],
})

console.log("myFont", myFont.className)

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={myFont.className}>
      <Component {...pageProps} />
    </main>
  )
}
