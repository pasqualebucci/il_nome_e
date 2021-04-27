import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import logo from "../images/logo.png"

const Header = ({ siteTitle, location }) => {
  let heroTitle = ""
  let immagine = null
  let heroButton = true
  if (location === "/") {
    heroButton = true
    heroTitle =
      "Una condizione economica disagiata non deve precludere il futuro di ogni bambino"
    heroButton = true
    immagine = (
      <StaticImage
        src={"../images/hero1.jpg"}
        quality={95}
        layout="fullWidth"
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{
          gridArea: "1/1",
          // You can set a maximum height for the image, if you wish.
          maxHeight: 900,
        }}
      />
    )
  } else if (location.includes("/blog")) {
    heroButton = false
    heroTitle = "BLOG"
    heroButton = false
    immagine = (
      <StaticImage
        src={"../images/hero1.jpg"}
        quality={95}
        layout="fullWidth"
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{
          gridArea: "1/1",
          // You can set a maximum height for the image, if you wish.
          maxHeight: 500,
        }}
      />
    )
  }

  return (
    <div style={{ display: "grid" }}>
      {immagine}
      <div
        style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "relative",
        }}
        className="overlay"
      >
        <div className="container">
          <nav className="navbar tras">
            <div className="navbar-brand">
              <a className="navbar-item">
                <img src={logo} alt="logo" style={{ height: "1rem" }} />
              </a>
              <span className="navbar-burger" data-target="navbarMenuHeroA">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenuHeroA" className="navbar-menu">
              <div className="navbar-end">
                <Link to="/" className="navbar-item is-active">
                  Home
                </Link>
                <Link to="/blog" className="navbar-item">
                  Blog
                </Link>
                <a className="navbar-item">Documentation</a>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div
        style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "relative",
          // This centers the other elements inside the hero component
          placeItems: "center",
          display: "grid",
        }}
      >
        {/* Any content here will be centered in the component */}
        <div className="container">
          <h1 className="heroText has-text-light has-text-centered">
            {heroTitle}
          </h1>
          <div className="has-text-centered">
            {heroButton && (
              <button className="button is-rounded is-large is-primary mt-6">
                Dona ora
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
