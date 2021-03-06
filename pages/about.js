import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import HoverImage from "react-hover-image";

import LayoutMain from "../components/LayoutMain";
import Container from "../components/Container";
import Carousel from "../components/Carousel/Carousel";

import styles from "../styles/Home.module.scss";

export default function About() {
  return (
    <LayoutMain>
      <Head>
        <title>hexonic studios</title>
        <meta
          name="description"
          content="A Collaborative Space for Creative Excellence."
        />
      </Head>
      <Container>
        <div className={styles.about}>
          <quote>
            Videography is capturing a story within an environment. <br />
            Cinematography is capturing that story while creating the
            environment.
            <br /> We are experts in both.
          </quote>
        </div>
      </Container>
      <section>
        <div className={styles.triple__wrapper}>
          <div className={styles.triple__image}>
            <Image
              src="https://res.cloudinary.com/burke-creative/image/upload/v1646974751/Hexonic%20Studios/Photos/DSC_9656_pr9iww.jpg"
              width={500}
              height={334}
            />
          </div>
          <div className={styles.triple__image}>
            <Image
              src="https://res.cloudinary.com/burke-creative/image/upload/v1646974809/Hexonic%20Studios/Photos/DSC_0002_hrjso7.jpg"
              width={500}
              height={334}
            />
          </div>
          <div className={styles.triple__image}>
            <Image
              src="https://res.cloudinary.com/burke-creative/image/upload/v1646974786/Hexonic%20Studios/Photos/DSC_9871_i9ofvq.jpg"
              width={500}
              height={334}
            />
          </div>
        </div>
      </section>
      <Container>
        <div className={styles.story}>
          <p>
            Excellence in video, it’s all we know. Our model is simple: whether
            it’s vertical reels or full-scaled productions, we bring our best.
            We’ve been creating compelling videos for over a decade. Some of us
            are life-long entrepreneurs and others have crossed over from
            corporate jobs.
          </p>
          <p>
            About four years ago, TJ Cardinal contracted Tim Doerfler to shoot a
            commercial for one of his companies. They produced a series of
            made-for-social videos that took TJ’s business to the next level.
            Together, they invested in gear and a studio space. Other companies
            started to notice the compelling and interesting videos that were
            coming out of what is now Hexonic Studios. The success brought in
            clients like Sherwin-Williams, Wal-Mart, and NASCAR. Tyler and Cole
            were added to the team to not only help with the workload, but to
            add new perspectives and experience.
          </p>
          <p>
            In 2019 we recognized that we had something special and decided to
            become intentional about offering our services to the world.
          </p>
        </div>
      </Container>
      <Container>
        <h1>The Team</h1>
        <div className={styles.team}>
          {/*}Tim{*/}
          <div className={styles.team__member}>
            <HoverImage
              className={styles.team__photo}
              src={
                "https://res.cloudinary.com/burke-creative/image/upload/v1648146128/Hexonic%20Studios/Team%20Photos/5X8A8759_njobci.jpg"
              }
              hoverSrc={
                "https://res.cloudinary.com/burke-creative/image/upload/v1648146129/Hexonic%20Studios/Team%20Photos/5X8A8791-Edit-Edit_lc9pfn.jpg"
              }
            />
            <h3 className={styles.team__name}>Tim Doerfler</h3>
            <h4 className={styles.team__title}>
              Production Lead/Director of Cinematography
            </h4>
          </div>
          {/*}TJ{*/}
          <div className={styles.team__member}>
            <HoverImage
              className={styles.team__photo}
              src={
                "https://res.cloudinary.com/burke-creative/image/upload/v1648146127/Hexonic%20Studios/Team%20Photos/5X8A8749_nsblfb.jpg"
              }
              hoverSrc={
                "https://res.cloudinary.com/burke-creative/image/upload/v1648146129/Hexonic%20Studios/Team%20Photos/5X8A8784-Edit_kjxqbg.jpg"
              }
            />
            <h3 className={styles.team__name}>TJ Cardinal</h3>
            <h4 className={styles.team__title}>Creative Director/Writer</h4>
          </div>
          {/*}Cole{*/}
          <div className={styles.team__member}>
            <HoverImage
              className={styles.team__photo}
              src={
                "https://res.cloudinary.com/burke-creative/image/upload/v1648146128/Hexonic%20Studios/Team%20Photos/5X8A8750_l9za4f.jpg"
              }
              hoverSrc={
                "https://res.cloudinary.com/burke-creative/image/upload/v1648146129/Hexonic%20Studios/Team%20Photos/5X8A8788-Edit_st5gu3.jpg"
              }
            />
            <h3 className={styles.team__name}>Cole Sarver</h3>
            <h4 className={styles.team__title}>
              Short Format Director/Animation
            </h4>
          </div>
          {/*}Tyler{*/}
          <div className={styles.team__member}>
            <HoverImage
              className={styles.team__photo}
              src={
                "https://res.cloudinary.com/burke-creative/image/upload/v1648146129/Hexonic%20Studios/Team%20Photos/5X8A8754_ohadsf.jpg"
              }
              hoverSrc={
                "https://res.cloudinary.com/burke-creative/image/upload/v1648146128/Hexonic%20Studios/Team%20Photos/5X8A8779-Edit_awq5rj.jpg"
              }
            />
            <h3 className={styles.team__name}>Tyler Neading</h3>
            <h4 className={styles.team__title}>Videography Lead</h4>
          </div>
        </div>
      </Container>
    </LayoutMain>
  );
}
