import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import styles from "./Header.module.scss"
import { RiMenu4Fill } from "react-icons/ri"
import { AiOutlineCloseSquare } from "react-icons/ai"

import logo from "../../public/hexoniclogowhite.png"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuToggler = () => setMenuOpen((p) => !p)

  return (
    <div className={styles.header}>
      <div className={styles.header__content}>
        <div className={styles.logo}>
          <span>
            <Image src={logo} width={320} height={70} alt="hexonic main logo" />
          </span>
        </div>
        <div>
          <nav
            className={`${styles.nav} ${menuOpen ? styles[`nav--open`] : {}}`}
          >
            <Link className={styles.nav__item} href={"/about"}>
              About
            </Link>
            <a className={styles.nav__item} href="https://www.youtube.com/channel/UC-fnGeW_PeTre3UzyA9OJqw/" target="_blank"  rel="noopener noreferrer">
              Our Work
            </a>
            <div className={styles.nav__button__container}>
              <Button />
            </div>
          </nav>
        </div>
        <div>
          <div className={styles.header__button__container}>
            <Button />
          </div>
          <button className={styles.header__toggler} onClick={menuToggler}>
            <RiMenu4Fill />
          </button>
        </div>
      </div>
    </div>
  )
}

const Button = () => {
  return <button className={styles.button}>Contact</button>
}

export default Navbar
