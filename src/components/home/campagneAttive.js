import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const CampagneAttive = () => {
  return (
    <section className="section " style={{ background: "#fff" }}>
      <div className="container">
        <div className="columns ">
          <div className="column content is-medium is-one-third-widescreen ">
            <div className="titleDivider" />
            <h2 className="title">CAMPAGNE ATTIVE</h2>
          </div>
          <div className="column content is-medium">
            <div className="columns">
              <div className="column">
                <div className="box has-background-success-light">
                  <div className="columns">
                    <div className="column">
                      <StaticImage
                        src="../../images/yoga_per_bambini.jpg"
                        quality={95}
                        formats={["AUTO", "WEBP", "AVIF"]}
                        alt="Combattiamo l'esclusione sociale"
                        style={{
                          maxHeight: 280,
                        }}
                      />
                    </div>
                    <div className="column">
                      <h3 className="title is-4 is-uppercase">Yoga</h3>
                      <p>
                        Scopri la campagna per lo Yoga! Grazie al tuo aiuto
                        potremo attivare una o più classi di Yoga nel 2021.
                      </p>
                      <button className="button is-rounded is-danger">
                        Scopri di più
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <div className="box has-background-info-light">
                  <div className="columns">
                    <div className="column">
                      <StaticImage
                        src="../../images/arti_marziali_bambini.jpg"
                        quality={95}
                        formats={["AUTO", "WEBP", "AVIF"]}
                        alt="Combattiamo l'esclusione sociale"
                        style={{
                          maxHeight: 280,
                        }}
                      />
                    </div>
                    <div className="column">
                      <h3 className="title is-4 is-uppercase">Arti marziali</h3>
                      <p>
                        Dona ora per la campagna Arti Marziali! Con il tuo
                        supporto potremo attivare una o più classi di Arti
                        Marziali nel 2021.
                      </p>
                      <button className="button is-rounded is-danger">
                        Scopri di più
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CampagneAttive
