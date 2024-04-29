import Head from 'next/head'
import Image from 'next/image'
import { Inter, Mystery_Quest } from 'next/font/google'
import { Header } from '@/components/_header'
import { AboutMe } from '@/components/_aboutme'
import { MyStack } from '@/components/_mystack'
import styles from '@/styles/index.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <div>
            <Header/>
            <AboutMe/>
            <MyStack/>
        </div>
      </main>
    </>
  )
}