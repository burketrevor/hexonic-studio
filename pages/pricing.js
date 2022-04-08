import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import HoverImage from "react-hover-image";

import LayoutMain from "../components/LayoutMain";
import ReelPricing from "../components/Pricing/reelPricing";
import CinemaPricing from "../components/Pricing/cinemaPricing";
import Container from "../components/Container";

import styles from "../styles/Home.module.scss";

export default function Pricing() {
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
        <div className={styles.pricing}>
          <h1>Results-driven, transparent pricing</h1>
        </div>
      </Container>
      <Container>
        <div className={styles.cards}>
          <ReelPricing />
          <CinemaPricing />
        </div>
        <div className={styles.pricing__item__features}>
          <h2>Additional Fees:</h2>
          <ul className={styles.pricing__item__features__list}>
            <li>B-roll, or reels on location less than 125 miles. $950</li>
            <li>
              Interviews and more intensive B-roll on location less than 125
              miles $1,950
            </li>
            <li>
              Snippet Video $1,250 (pulling a short clip out of a longer video)
            </li>
            <li>
              <sub>
                Prices are subject to project parameters and geographic
                location. 50% down and balance is due upon completion.
              </sub>
            </li>
          </ul>
        </div>
      </Container>
      <Container>
        <div className={styles.give}>
          <h3>The monthly give-back:</h3>
          <p>
            Our social responsibility initiative. Every month we are donating
            commercial video or photography to a non-profit or humanitarian
            cause.
          </p>
          <div className={styles.clients__wrapper}>
            <div className={styles.clients__logo}>
              <Image
                src="https://res.cloudinary.com/burke-creative/image/upload/v1649397964/Hexonic%20Studios/Photos/fostering-hope-white_cw6bei.png"
                width={100}
                height={100}
              />
            </div>
            <div className={styles.clients__logo}>
              <Image
                src="https://res.cloudinary.com/burke-creative/image/upload/v1649397964/Hexonic%20Studios/Photos/o-huddle-white_cbuzoz.png"
                width={100}
                height={100}
              />
            </div>
            <div className={styles.clients__logo}>
              <Image
                src="https://res.cloudinary.com/burke-creative/image/upload/v1649397964/Hexonic%20Studios/Photos/MISSION-white_hxn66a.png"
                width={100}
                height={100}
              />
            </div>
            <div className={styles.clients__logo}>
              <Image
                src="https://res.cloudinary.com/burke-creative/image/upload/v1649398060/Hexonic%20Studios/Photos/dalton-pto-white_to6tew.png"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </Container>
    </LayoutMain>
  );
}
