import React from "react"
import { StaticImage } from "gatsby-plugin-image"
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
                <div style={{ textAlign: "center" }}>
                  <StaticImage
                    src="../images/il-nome-e-logo.png"
                    quality={95}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    alt="Il nome è"
                    height="50px"
                  />
                </div>
                <p className="mt-4">
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
                  <a
                    class="button is-large"
                    href="#"
                    style={{ border: "none", padding: 0 }}
                  >
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      style={{
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        strokeLinejoin: "round",
                        strokeMiterlimit: 2,
                      }}
                    >
                      <g transform="matrix(1,0,0,1,-2.07455,-10.4669)">
                        <circle
                          cx="532.976"
                          cy="520.623"
                          r="20.976"
                          style={{ fill: "lightgrey" }}
                        />
                      </g>
                      <path
                        d="M530.901,367.087C609.864,367.087 673.971,431.194 673.971,510.156C673.971,589.118 609.864,653.225 530.901,653.225C451.939,653.225 387.832,589.118 387.832,510.156C387.832,431.194 451.939,367.087 530.901,367.087ZM530.901,384.228C600.403,384.228 656.829,440.655 656.829,510.156C656.829,579.658 600.403,636.084 530.901,636.084C461.4,636.084 404.973,579.658 404.973,510.156C404.973,440.655 461.4,384.228 530.901,384.228Z"
                        style={{ fill: "lightgrey" }}
                      />
                      <path
                        d="M292.026,684.085C256.396,635.224 235.356,575.034 235.356,509.969C235.356,346.612 367.981,213.986 531.338,213.986C637.782,213.986 731.178,270.297 783.347,354.747L670.365,418.18C640.205,373.597 589.17,344.266 531.338,344.266C438.764,344.266 363.605,419.425 363.605,512C363.605,604.575 438.764,679.734 531.338,679.734C590.438,679.734 642.44,649.102 672.323,602.858L783.347,665.191C731.178,749.642 637.782,805.952 531.338,805.952C466.649,805.952 406.779,785.154 358.074,749.899L235.836,806.326L292.026,684.085Z"
                        style={{ fill: "lightgrey" }}
                      />
                      <path
                        d="M496.189,416.338C500.205,416.338 503.466,419.796 503.466,424.055C503.466,427.243 501.639,429.982 499.036,431.158C478.402,439.394 465.521,455.71 452.814,475.951C452.378,477.246 451.654,478.397 450.724,479.317C450.477,479.72 450.229,480.124 449.981,480.53L449.649,480.215C448.379,481.1 446.86,481.615 445.228,481.615C440.784,481.615 437.176,477.795 437.176,473.089C437.176,471.697 437.492,470.382 438.052,469.22L438.037,469.206C450.853,442.922 468.459,424.188 492.813,417.218C493.821,416.656 494.97,416.338 496.189,416.338Z"
                        style={{ fill: "lightgrey" }}
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="column mt-0">
              <div className="columns">
                <div className="column">
                  <aside className="menu">
                    <p className="menu-label">General</p>
                    <ul className="menu-list">
                      <li>
                        <a>Dashboard</a>
                      </li>
                      <li>
                        <a>Customers</a>
                      </li>
                    </ul>
                  </aside>
                </div>
                <div className="column">
                  <aside className="menu">
                    <p className="menu-label">General</p>
                    <ul className="menu-list">
                      <li>
                        <a>Dashboard</a>
                      </li>
                      <li>
                        <a>Customers</a>
                      </li>
                    </ul>
                  </aside>
                </div>
              </div>
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
