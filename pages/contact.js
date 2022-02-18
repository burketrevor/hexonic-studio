import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.scss";

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hexonic Studios</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Contact</h1>
    </div>
  );
}
