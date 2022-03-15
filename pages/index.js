import { useState, useEffect } from "react"
import Head from "next/head"
import Image from "next/image"

import Image from "next/image"

import Layout from "../components/Layout"
import Container from "../components/Container"

import images from "../data/images.json"

import styles from "../styles/Home.module.scss"
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax"

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
        <section id="intro" className={styles.main}>
          <span className={styles.main__logo}>
            <Image src={logo} width={640} height={140} />
          </span>
          <h1 className={styles.title}>
            A Collaborative Space for <br />
            <span className={styles.title__color}>Creative Excellence</span>
          </h1>
          <div className={styles.mouse}>
            <span></span>
          </div>
        </section>
        {/*}
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
{*/}
      </Container>
      {/*}About Section{*/}
      <section>
        <div>
          <ParallaxProvider>
            <ParallaxBanner
              className={styles.bannerBg}
              style={{ aspectRatio: "2 / 1" }}
              layers={[
                {
                  speed: -30,
                  children: (
                    <video
                      className={styles.video}
                      autoPlay
                      loop
                      playsInline
                      preload="auto"
                      muted
                      src="https://res.cloudinary.com/burke-creative/video/upload/v1646974570/Hexonic%20Studios/Video/Hexonic_Reel_for_Web_1080_yzrmv7.mp4"
                    />
                  ),
                },
              ]}
            ></ParallaxBanner>
          </ParallaxProvider>
          <Container>
            <div className={styles.about}>
              <div className={styles.about__title}>
                <h2>Creative Assets for Everyone!</h2>
              </div>
              <div className={styles.about__text}>
                <p>
                  We are a full-service co-op. That means branding to content
                  creation to campaigns and all the not-so-little things in
                  between. Our magnum opus (fancy phrase for what we’re best at)
                  is commercial digital cinema and studio photography.
                </p>
              </div>
              <a href="#" className={styles.vertical__button}>
                Our Work
              </a>
            </div>
          </Container>
        </div>
      </section>

      {/*}How Section{*/}
      <section>
        <div>
          <ParallaxProvider>
            <ParallaxBanner
              className={styles.bannerBg}
              style={{ aspectRatio: "2 / 1" }}
              layers={[
                {
                  speed: -30,
                  children: (
                    <video
                      className={styles.video}
                      autoPlay
                      loop
                      playsInline
                      preload="auto"
                      muted
                      src="https://res.cloudinary.com/burke-creative/video/upload/v1646974372/Hexonic%20Studios/Video/Hexonic_-_No_audio_nr9zrt.mp4"
                    />
                  ),
                },
              ]}
            ></ParallaxBanner>
          </ParallaxProvider>
          <Container>
            <div className={styles.about}>
              <div className={styles.about__title}>
                <h2>
                  The <span className={styles.title__color}>[</span>un
                  <span className={styles.title__color}>]</span>Agency
                </h2>
              </div>
              <div className={styles.about__text}>
                <p>
                  We are a co-op of creatives, not employees. We’ve invited some
                  of the best minds to share projects in a common space. We
                  share ideas so you get our very best work.
                </p>
              </div>
              <a href="#" className={styles.vertical__button}>
                Let's Chat
              </a>
            </div>
          </Container>
        </div>
      </section>
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
