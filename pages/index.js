import { useState, useEffect } from "react"
import Head from "next/head"
import Image from "next/image"

import Layout from "../components/Layout"
import Container from "../components/Container"

import images from "../data/images.json"

import styles from "../styles/Home.module.scss"
import { ParallaxBanner } from "react-scroll-parallax"

export default function Home({ images }) {
  return (
    <Layout>
      <Head>
        <title>hexonic studios</title>
        <meta
          name="description"
          content="A Collaborative Space for Creative Excellence."
        />
      </Head>

      <Container>
        <section className={styles.main}>
          <span className={styles.main__logo}>
            <img src="./hexonic-logo-wide.svg"></img>
          </span>
          <h1 className={styles.title}>
            A Collaborative Space for <br />
            <span className={styles.title__color}>Creative Excellence</span>
          </h1>
        </section>

        <section>
          <h1 className="sr-only">My Images</h1>

          <h2 className={styles.header}>Images</h2>

          <ul className={styles.images}>
            {images.map((image) => {
              return (
                <li key={image.id}>
                  <a href={image.link} rel="noreferrer">
                    <div className={styles.imageImage}>
                      <Image
                        width={image.width}
                        height={image.height}
                        src={image.image}
                        alt=""
                      />
                    </div>
                  </a>
                </li>
              )
            })}
          </ul>
        </section>
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const results = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image/tags/Lava`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(
          process.env.CLOUDINARY_API_KEY +
            ":" +
            process.env.CLOUDINARY_API_SECRET
        ).toString("base64")}`,
      },
    }
  ).then((r) => r.json())
  const { resources } = results
  const images = resources.map((resource) => {
    const { width, height } = resource
    return {
      id: resource.asset_id,
      title: resource.public_id,
      image: resource.secure_url,
      width,
      height,
    }
  })

  return {
    props: {
      images,
    },
  }
}
