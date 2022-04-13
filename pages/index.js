import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

import Layout from "../components/Layout";
import Container from "../components/Container";
import Header from "../components/Header";

import images from "../data/images.json";

import hero from "../public/hexoniclogowide.png";

import styles from "../styles/Home.module.scss";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";

export default function Home() {
  return (
    <>
    <Script id="show-header">
    {`window.scroll(function() {
        if (this.scrollTop()>600)
        {
          document.getElementByClassName("header").style.display = "";
        }
        else 
          {
            document.getElementByClassName("header").style.display = "none";
        }
    });`}
    </Script>

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
          <h1 className={styles.title}>
            Welcome. We're Hexonic Studios. <br />
          </h1>
          <p>
            <h3 className={styles.title}>
              We make videos. The kind you remember.
            </h3>
          </p>

          <div className={styles.scrolldown__wrapper}>
            <div className={styles.scrolldown}>
              <svg height="300" width="20">
                <circle
                  className={styles.scrolldown__p1}
                  cx="5"
                  cy="15"
                  r="3"
                />
                <circle
                  className={styles.scrolldown__p2}
                  cx="5"
                  cy="15"
                  r="3"
                />
                <circle
                  className={styles.scrolldown__p3}
                  cx="5"
                  cy="15"
                  r="3"
                />
              </svg>
            </div>
          </div>
        </section>
      </Container>
      <Header />
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
                      q_auto
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
            <div className={styles.feature}>
              <div className={styles.feature__title}>
                <h1>From Reels to Documentaries</h1>
              </div>
              <div className={styles.feature__text}>
                <p>
                  Your brand has a story. We help tell that story with
                  creativity so that you stand out in the marketplace. We love
                  discovering your brand’s spark so we can set it on fire.
                </p>
              </div>
              <a
                href="https://www.youtube.com/channel/UC-fnGeW_PeTre3UzyA9OJqw/"
                target="_blank"
                rel="noreferrer"
                className={styles.vertical__button}
              >
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
                      q_auto
                      src="https://res.cloudinary.com/burke-creative/video/upload/v1646974372/Hexonic%20Studios/Video/Hexonic_-_No_audio_nr9zrt.mp4"
                    />
                  ),
                },
              ]}
            ></ParallaxBanner>
          </ParallaxProvider>
          <Container>
            <div className={styles.feature}>
              <div className={styles.feature__title}>
                <h1>
                  All the <br />
                  Feels
                </h1>
              </div>
              <div className={styles.feature__text}>
                <p>
                  We understand both the energy of brands and the struggle of
                  trying to communicate that energy with the world. We turn
                  emotion into knowledge and knowledge into movement.
                </p>
              </div>
              <a className={styles.vertical__button}>
                <Link href={"/contact"}>Let's Chat</Link>
              </a>
            </div>
          </Container>
        </div>
      </section>
    </Layout>
    </>
  );
}
