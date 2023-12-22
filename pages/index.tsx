import Head from "next/head"
import Image from "next/image"
import { Inter } from "next/font/google"
import styles from "@/styles/Home.module.css"
const inter = Inter({ subsets: ["latin"] })
import styled from "styled-components"
let Box = styled.div<{ primary?: any; italic?: any }>`
  border: 1px solid black;
  /* color: ${({ primary }) => {
    if (primary) return "white"
  }}; */

  color: ${({ primary }) => {
    if (primary) {
      return "white"
    } else return "yellow"
  }};

  background-color: ${({ primary }) => (primary ? "blue" : "red ")};

  width: 100px;
  height: 100px;
`
export default function Home() {
  return (
    <>
      <Box italic primary>
        {" "}
        fello me
      </Box>
      <Box> fello me</Box>
    </>
  )
}
