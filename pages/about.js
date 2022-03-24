import Head from "next/head"
import Image from "next/image"

import Layout from "../components/Layout"
import Container from "../components/Container"
import styles from "../styles/Home.module.scss"

export default function About() {
  return (
    <Layout>
      <Head>
        <title>hexonic studios</title>
        <meta
          name="description"
          content="A Collaborative Space for Creative Excellence."
        />
      </Head>
      
    <div className={styles.main}>
      <h1>About</h1>
    </div>
    </Layout>
  )
}
