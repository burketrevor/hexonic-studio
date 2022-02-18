import Layout from "../components/Layout"
import "../styles/globals.scss"
import styles from "../styles/Home.module.scss"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
