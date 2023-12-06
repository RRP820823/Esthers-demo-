import Head from "next/head"
import Image from "next/image"
import { Inter } from "next/font/google"
import styles from "@/styles/Home.module.css"
const inter = Inter({ subsets: ["latin"] })
import styled from "styled-components"
import Box1Container from "@/components/Box1Container"
let Main = styled.div`
  border-radius: 0px 0px 10px 10px;
  background: #f4f0ec;
  backdrop-filter: blur(43.5px);
  display: flex;
  justify-content: center;
  height: 100%;
`

let Section = styled.section`
  border: 1px solid black;
  margin-top: 5%;
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  padding: 5px;
`

const Box1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: 1px solid black;
  flex-grow: 1;
  background: var(--Form-big-toggle, #f8f8f8);
`

const Box2 = styled.div`
  display: flex;
  flex-grow: 1;

  border: 1px solid black;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  border: 1px solid black;
`
export default function Home() {
  return (
    <Main>
      <Section>
        <Container>
          <Box1>
            <Box1Container></Box1Container>
          </Box1>
          <Box2>me </Box2>
        </Container>
      </Section>
    </Main>
  )
}
