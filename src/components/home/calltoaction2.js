import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const CallToAction2 = () => {
  return (
    <div style={{ display: "grid" }}>
      <StaticImage
        src="../../images/hero3.jpg"
        quality={95}
        layout="fullWidth"
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{
          gridArea: "1/1",
          // You can set a maximum height for the image, if you wish.
          maxHeight: 600,
        }}
        transformOptions={{
          duotone: { highlight: "#FDCB66", shadow: "#2c1c46" },
        }}
      />
      <div
        style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "relative",
        }}
      ></div>
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
        <div className="container ">
          <h2 className="heroText2 has-text-light has-text-centered is-uppercase">
            Devolvi ora iltuo 5x1000
          </h2>
          <p className="subtitle has-text-light is-size-3">
            La tua firma può fare la differenza per tanti bambini. Fai anche tu
            parte del cambiamento!
          </p>
          <div className="has-text-centered">
            <button className="button is-rounded is-primary is-large mt-6">
              Scopri come
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CallToAction2
