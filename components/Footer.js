import Image from "next/image"
import { BiCurrentLocation } from "react-icons/bi"
import { BsFillTelephoneFill } from "react-icons/bs"
import { MdMarkEmailRead } from "react-icons/md"
import styles from "../styles/Home.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={(styles.footer__item, styles.footer__item__short)}>
        <div className={styles.footer__logo}>
          <img src="./hexonic-logo-white.png"></img>
        </div>
        <span className={styles.footer__location}>
          <BiCurrentLocation />
          <span>15225 Lincoln Way W, Dalton, OH</span>
        </span>
        <span className={styles.footer__phone}>
          <BsFillTelephoneFill />
          <span> 123.867.5309</span>
        </span>
        <span className={styles.footer__email}>
          <MdMarkEmailRead />
          <span> tj@hexonic.com</span>
        </span>
      </div>
      <div className={(styles.footer__item, styles.footer__item__tall)}>
        Box 2
      </div>
    </footer>
  )
}

export default Footer
