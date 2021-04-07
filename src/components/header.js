import * as React from "react"

import HeaderHome from "./headerHome"
import HeaderPage from "./headerPage"

const Header = ({ siteTitle, location }) => {
  console.log(location)
  return <header>{location === "/" ? <HeaderHome /> : <HeaderPage />}</header>
}

export default Header
