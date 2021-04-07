import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const CosaFacciamo = () => {
  return (
    <section className="section " style={{ background: "#fff" }}>
      <div className="container">
        <div className="columns ">
          <div className="column content is-medium is-one-third-widescreen ">
            <div className="titleDivider" />
            <h2 className="title">COSA FACCIAMO</h2>
          </div>
          <div className="column content is-medium">
            <div className="columns">
              <div className="column">
                <div className="box has-background-warning-light">
                  <StaticImage
                    src="../../images/esclusione_sociale.jpg"
                    quality={95}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    alt="Combattiamo l'esclusione sociale"
                    style={{
                      maxHeight: 280,
                    }}
                  />
                  <h3 className="title is-4 is-uppercase">
                    Combattiamo l'esclusione sociale
                  </h3>
                  <p>
                    Molti bambini, a causa del loro status sociale, vengono
                    esclusi dai loro pari nelle attività sociali. Ricerche
                    Eurostat del 2020, dimostrano come l'Italia abbia il triste
                    primato di bambini a rischio povertà ed esclusione sociale.
                  </p>
                </div>
              </div>
              <div className="column">
                <div className="box has-background-info-light">
                  <StaticImage
                    src="../../images/abbandono_scolastico.jpg"
                    quality={95}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    alt="Contrastiamo l'abbandono scolastico"
                    style={{
                      maxHeight: 280,
                    }}
                  />
                  <h3 className="title is-4 is-uppercase">
                    Contrastiamo l'abbandono scolastico
                  </h3>
                  <p>
                    E' ampiamente dimostrato come le condizioni economiche
                    familiari alla soglia della povertà, portino bambini e
                    ragazzi ad abbandonare il loro percorso di studi. Noi
                    creeremo un ambiente non solo a livello sportivo, ma anche
                    intellettuale per incentivarli a continuare nel loro
                    percorso scolastico.
                  </p>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <div className="box has-background-success-light">
                  <StaticImage
                    src="../../images/supporto_psicologico.jpg"
                    quality={95}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    alt="Offriamo supporto psicologico"
                    style={{
                      maxHeight: 280,
                    }}
                  />
                  <h3 className="title is-4 is-uppercase">
                    Offriamo supporto psicologico
                  </h3>
                  <p>
                    Nei casi più gravi, l'esclusione sociale e la povertà, hanno
                    già segnato psicologicamente i bambini. Nei casi più gravi,
                    forniremo un supporto psicologico, per le famiglie che ne
                    avessero voglia.
                  </p>
                </div>
              </div>
              <div className="column">
                <div className="box has-background-danger-light">
                  <StaticImage
                    src="../../images/futuro_sereno.jpg"
                    quality={95}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    alt="Regaliamo un futuro sereno"
                    style={{
                      maxHeight: 280,
                    }}
                  />
                  <h3 className="title is-4 is-uppercase">
                    Regaliamo un futuro sereno
                  </h3>
                  <p>
                    Attrezzatura, lezioni, assicurazione, sarà tutta a carico
                    dell <strong>APS-ADS IL nome è...</strong> perchè il futuro
                    può partire dallo sport! Noi abbiamo scelto lo Yoga e le
                    Arti Marziali, i quali risultano particolarmente indicati
                    per combattere l'esclusione sociale e l'abbandono
                    scolastico.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CosaFacciamo
