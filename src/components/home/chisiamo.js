import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const ChiSiamo = () => {
  return (
    <section className="section has-background-success-light">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column">
            <div style={{ height: "700px", position: "relative" }}>
              <StaticImage
                src="../../images/chi_siamo_h1.jpg"
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="A Gatsby astronaut"
                style={{
                  maxWidth: 400,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  border: "12px solid #E4F6F3",
                }}
              />
              <StaticImage
                src="../../images/chi_siamo_h2.jpg"
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="A Gatsby astronaut"
                style={{
                  maxWidth: 400,
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  border: "12px solid #E4F6F3",
                }}
              />
            </div>
          </div>
          <div className="column content is-medium">
            <div className="titleDivider" />
            <h2 className="title ">CHI SIAMO</h2>
            <p>
              <strong className="">L'APS-ADS IL NOME E'...</strong> è una
              associazione nata a Taranto, con lo scopo di fornire lezioni
              gratuite di arti marziali e yoga ai bambini appartenenti a
              famiglia in condizioni economiche disagiate.
            </p>
            <p>
              La nostra Associazione è fatta di persone che amano lo sport e che
              guardano al futuro, desiderosi di regalarne uno migliore a tanti
              bambini.
            </p>
            <p>
              Ogni giorno ci impegniamo ad essere presenti sul nostro
              territorio, con la speranza, un giorno di diventare sempre più
              grandi e rendere tutto ciò una realtà a livello nazionale.
            </p>
            <button className="button is-danger is-rounded is-medium">
              Scopri di più
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChiSiamo
