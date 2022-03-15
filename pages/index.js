import { useState, useEffect } from "react"
import Head from "next/head"
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
            <Image
              src={"/../public/hexonic-logo-wide.png"}
              width={640}
              height={140}
              alt="hexonic main logo"
            />
          </span>
          <h1 className={styles.title}>
            A Collaborative Space for <br />
            <span className={styles.title__color}>Creative Excellence</span>
          </h1>
          <div className={styles.mouse}>
            <span></span>
          </div>
        </section>
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
                  We are a co-op of creatives, not employees. We&rsquo;ve
                  invited some of the best minds to share projects in a common
                  space. We share ideas so you get our very best work.
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
