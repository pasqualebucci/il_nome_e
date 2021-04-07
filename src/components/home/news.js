import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const News = () => {
  return (
    <section className="section mb-6">
      <div className="container">
        <div className="columns ">
          <div className="column content is-medium is-one-third-widescreen ">
            <div className="titleDivider" />
            <h2 className="title">DAL BLOG</h2>
          </div>
          <div className="column content is-medium">
            <div className="columns">
              <div className="column">
                <div className="has-background-white">
                  <p className="is-size-6 is-uppercase">3 Aprile 2021</p>
                  <h3 className="title is-4 is-uppercase mt-1">
                    Combattiamo l'esclusione sociale
                  </h3>

                  <StaticImage
                    src="../../images/esclusione_sociale.jpg"
                    quality={95}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    alt="Combattiamo l'esclusione sociale"
                    style={{
                      maxHeight: 280,
                    }}
                  />

                  <p>
                    Molti bambini, a causa del loro status sociale, vengono
                    esclusi dai loro pari nelle attività sociali.
                  </p>
                  <Link to="/" className="is-italic">
                    ... continua a leggere
                  </Link>
                </div>
              </div>
              <div className="column">
                <div className="has-background-white">
                  <p className="is-size-6 is-uppercase">3 Aprile 2021</p>
                  <h3 className="title is-4 is-uppercase mt-1">
                    Contrastiamo l'abbandono scolastico
                  </h3>
                  <StaticImage
                    src="../../images/abbandono_scolastico.jpg"
                    quality={95}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    alt="Contrastiamo l'abbandono scolastico"
                    style={{
                      maxHeight: 280,
                    }}
                  />

                  <p>
                    E' ampiamente dimostrato come le condizioni economiche
                    familiari alla soglia della povertà, portino bambini e
                    ragazzi ad abbandonare il loro percorso di studi
                  </p>
                  <Link to="/" className="is-italic">
                    ... continua a leggere
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default News
