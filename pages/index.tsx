import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Link from "next/link"
import Checkbox from "@mui/material/Checkbox"
import styled from "styled-components"

const inter = Inter({ subsets: ["latin"] })

const Form = styled.form`
  border: 1px solid #d6e4e5;
  border-radius: 10px;
  min-width: 60%;
  width: 60%;
  padding: 30px 100px;
  min-height: 60vh;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  display: flex;
`

export default function Home() {
  return (
    <>
      <Head>
        <title>Petmate administration dashboard</title>
        <meta
          name="description"
          content="Petmate te permite administrar tu clinica veterinaria y tus pacientes"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Form>
          <Image
            src={"/assets/petmate-logo.png"}
            width={411 / 1.6}
            height={139 / 1.6}
            alt="Petmate mobile"
          />
          <TextField id="standard-basic" label="Email" variant="standard" />
          <TextField
            id="standard-basic"
            label="Password"
            variant="standard"
            type="password"
          />
          <Checkbox /> Recuerdame
          <Button variant="outlined">Log In</Button>
          <Link href="#">Olvidaste tu password?</Link>
        </Form>
      </main>
    </>
  )
}

