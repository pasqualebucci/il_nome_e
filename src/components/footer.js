import { nominalTypeHack } from "prop-types"
import React from "react"
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="mt-6" style={{ background: "#A86CAD" }}>
      <div className="section">
        <div className="container">
          <div className="columns">
            <div className="column content is-medium is-one-third-widescreen">
              <div
                className="box"
                style={{
                  position: "relative",
                  top: "-6rem",
                  borderTop: "6px solid #FCA481",
                }}
              >
                <p>
                  Rimani in contatto con le nostre iniziative. Iscriviti alla
                  newsletter e seguici sui nostri social
                </p>
                <input
                  class="input is-large"
                  type="text"
                  placeholder="La tua email"
                />
                <button class="button is-danger is-large is-fullwidth">
                  Iscriviti alla newsletter
                </button>
                <hr />
                <div className="buttons is-centered">
                  <a
                    class="button is-large"
                    href="#"
                    style={{ border: "none", padding: 0 }}
                  >
                    <FaFacebookSquare
                      style={{ fontSize: "3rem", color: "lightgray" }}
                    />
                  </a>
                  <a
                    class="button is-large"
                    href="#"
                    style={{ border: "none", padding: 0 }}
                  >
                    <FaTwitterSquare
                      style={{ fontSize: "3rem", color: "lightgray" }}
                    />
                  </a>
                  <a
                    class="button is-large"
                    href="#"
                    style={{ border: "none", padding: 0 }}
                  >
                    <FaInstagramSquare
                      style={{ fontSize: "3rem", color: "lightgray" }}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="column mt-0">
              <div className=""></div>
            </div>
          </div>
        </div>
      </div>
      <div className="has-text-centered pt-6 pb-6">
        {" "}
        © {new Date().getFullYear()}, Webartsdesign
      </div>
    </footer>
  )
}

export default Footer
