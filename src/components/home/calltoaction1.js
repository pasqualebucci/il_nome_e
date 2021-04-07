import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const CallToAction1 = () => {
  return (
    <div style={{ display: "grid" }}>
      <StaticImage
        src="../../images/hero2.jpg"
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
          duotone: { highlight: "#FCA481", shadow: "#2c1c46" },
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
        <div className="container">
          <h2 className="heroText2 has-text-light has-text-centered is-uppercase">
            Grazie al tuo prezioso aiuto, potremo offrire ai bambini, corsi
            gratuiti di yoga e arti marziali e supporto psicologico nei casi più
            gravi.
          </h2>
          <div className="has-text-centered">
            <button className="button is-rounded is-primary is-large mt-6">
              Dona ora
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CallToAction1
