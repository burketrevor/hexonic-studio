import Image from "next/image"
import { BsYoutube, BsInstagram, BsFacebook } from "react-icons/bs"
import styles from "./Footer.module.scss"
import logo from "../../public/hexoniclogowhite.png"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__item}>
        <div className={styles.contact}>
          <a href="">
          <h1>Ready to start?</h1>
          </a>
        </div>
        <div className={styles.footer__logo}>
          <Image src={logo} width={320} height={70} alt="hexonic main logo" />
        </div>
        <div className={styles.socials}>
          <a href="" className={styles.socials__icon}><BsFacebook /></a>
          <a href="" className={styles.socials__icon}><BsInstagram /></a>
          <a href="" className={styles.socials__icon}><BsYoutube /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
