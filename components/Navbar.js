import styles from "../styles/Home.module.scss";

const Navbar = () => {
  return (
    <div className={styles.header}>
      <div id="{styles.brand}">
        <a href="/">Hexonix Studios</a>
      </div>
    </div>
  );
};

export default Navbar;
