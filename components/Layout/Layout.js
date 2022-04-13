import Head from "next/head";
import Script from "next/script";

import Header from "../Header";
import Footer from "../Footer";

import styles from "./Layout.module.scss";

const Layout = ({ children, className, ...rest }) => {
  let layoutClassName = styles.layout;

  if (className) {
    layoutClassName = `${layoutClassName} ${className}`;
  }

  return (
    <>
    <Script id="show-header">
    {`$(window).scroll(function() {
        if ($(this).scrollTop()>600)
        {
          $('.header').show(1000);
        }
        else 
          {
            $('.header').hide(1000);
        }
    });`}
    </Script>

    <div className={layoutClassName} {...rest}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
    </>
  );
};

export default Layout;
