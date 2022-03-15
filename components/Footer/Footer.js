import Image from "next/image"
import { BiCurrentLocation } from "react-icons/bi"
import { BsFillTelephoneFill } from "react-icons/bs"
import { MdMarkEmailRead } from "react-icons/md"
import styles from "./Footer.module.scss"
import logo from "../../public/hexoniclogowhite.png"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__item}>
        <div>
          <h1>Ready to start?</h1>
        </div>
        <div className={styles.footer__logo}>
          <Image src={logo} width={320} height={70} alt="hexonic main logo" />
        </div>
        <span className={styles.footer__location}>
          <BiCurrentLocation />
          <span> 15225 Lincoln Way W, Dalton, OH</span>
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
    </footer>
  )
}

export default Footer
