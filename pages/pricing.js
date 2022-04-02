import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import HoverImage from "react-hover-image";

import Layout from "../components/Layout";
import ReelPricing from "../components/Pricing/reelPricing";
import Container from "../components/Container";

import styles from "../styles/Home.module.scss";

export default function Pricing() {
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
        <ReelPricing />
      </Container>
    </Layout>
  );
}
