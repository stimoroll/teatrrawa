import React, { useState } from "react"
import Header from "../Header/Header"
import Hamburger from "../Hamburger/Hamburger"
import OverlayMenu from "../OverlayMenu/OverlayMenu"
import Footer from "../Footer/Footer"
import { GlobalStyles, Primary, BodyWrapper } from "./Layout.styles"

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleOverlayMenu = () => setMenuOpen(prev => !prev)


  //TODO: globalstyles, Header, OverlayMenu
  return (
    <>
      <GlobalStyles />
      <Hamburger handleOverlayMenu={handleOverlayMenu} />
      <OverlayMenu menuOpen={menuOpen} callback={handleOverlayMenu} />
      <Header />
      <BodyWrapper>
        <Primary>{children}</Primary>
      </BodyWrapper>
      <Footer />
    </>
  )
}

export default Layout
