import Navbar from "./Navbar"
import Footer from "../components/Footer"

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
