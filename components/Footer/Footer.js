import Image from "next/image";
import {
  BsYoutube,
  BsInstagram,
  BsFacebook,
  BsFileEarmarkPerson,
} from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import styles from "./Footer.module.scss";
import logo from "../../public/hexoniclogowhite.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__item}>
        <div className={styles.contact}>
          <a href="/contact">
            <h1>Ready to start?</h1>
          </a>
        </div>
        <div className={styles.footer__logo}>
          <Image src={logo} width={320} height={70} alt="hexonic main logo" />
        </div>
        <div className={styles.socials}>
          <a
            href="https://www.facebook.com/HexonicStudios"
            className={styles.socials__icon}
          >
            <BsFacebook />
          </a>
          <a
            href="https://www.instagram.com/hexonicstudios/"
            className={styles.socials__icon}
          >
            <BsInstagram />
          </a>
          <a
            href="https://www.youtube.com/channel/UC-fnGeW_PeTre3UzyA9OJqw/"
            className={styles.socials__icon}
          >
            <BsYoutube />
          </a>
          <a
            href="https://www.tiktok.com/@hexonicstudios"
            className={styles.socials__icon}
          >
            <FaTiktok />
          </a>
          <a
            href="https://bio.site/hexonicstudios"
            className={styles.socials__icon}
          >
            <BsFileEarmarkPerson />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
