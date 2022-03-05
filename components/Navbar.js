import React, { useState } from "react"
import styles from "../styles/Home.module.scss"
import { RiMenu4Fill } from "react-icons/ri"
import { AiOutlineCloseSquare } from "react-icons/ai"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuToggler = () => setMenuOpen((p) => !p)

  return (
    <div className={styles.header}>
      <div className={styles.header__content}>
        <div>
          <span className={styles.logo}>
            <img src="./hexonic-icon-white.png"></img>
          </span>
        </div>
        <div>
          <nav
            className={`${styles.nav} ${menuOpen ? styles[`nav--open`] : {}}`}
          >
            <a className={styles.nav__item} href={"/"}>
              About
            </a>
            <a className={styles.nav__item} href={"/"}>
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
