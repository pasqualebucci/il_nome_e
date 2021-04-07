import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import logo from "../../images/logo.png"

const HeaderHome = () => {
  return (
    <div style={{ display: "grid" }}>
      <StaticImage
        src="../../images/hero1.jpg"
        quality={95}
        layout="fullWidth"
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{
          gridArea: "1/1",
          // You can set a maximum height for the image, if you wish.
          maxHeight: 900,
        }}
        transformOptions={{
          duotone: { highlight: "#67A3D9", shadow: "#2c1c46" },
        }}
      />
      <div
        style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "relative",
        }}
      >
        <div className="container">
          <nav class="navbar tras">
            <div class="navbar-brand">
              <a class="navbar-item">
                <img src={logo} alt="logo" style={{ height: "1rem" }} />
              </a>
              <span class="navbar-burger" data-target="navbarMenuHeroA">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenuHeroA" class="navbar-menu">
              <div class="navbar-end">
                <a class="navbar-item is-active">Home</a>
                <a class="navbar-item">Examples</a>
                <a class="navbar-item">Documentation</a>
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
            UNA CONDIZIONE ECONOMICA DISAGIATA NON DEVE PRECLUDERE IL FUTURO DI
            OGNI BAMBINO
          </h1>
          <div className="has-text-centered">
            <button className="button is-rounded is-large is-primary mt-6">
              Dona ora
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderHome
