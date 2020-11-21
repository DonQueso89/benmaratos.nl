import React, { useState, useEffect } from "react"
import { Link, graphql } from "gatsby"

import SEO from "../components/seo"
import "../styles/index.css"
import indexBG from "../assets/images/index-bg.jpeg"

const componentStyle = {
  padding: `1.45rem 1.0875rem`,
  display: `flex`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: "flex-start",
  width: "auto",
  height: "100vh",
  background: `rgba(20, 20, 100, .3)`,
  flex: 1,
}

const mainLinkStyle = {
  marginLeft: `20px`,
  marginRight: `20px`,
  textDecoration: `none`,
  fontSize: "2.5rem",
  color: "beige",
  opacity: .7
}

const Review = ({ text, newspaper, ...extraStyle }) => {
  const [opacity, setOpacity] = useState(0)
  useEffect(() => {
    setOpacity(1.0)
  }, [setOpacity])
  return (
    <div
      className={"review"}
      style={{ opacity, position: "relative", ...extraStyle, color: 'beige' ,opacity: 0.7 }}
    >
      <h4 style={{ marginBottom: 2 }}>{text}</h4>
      <hr style={{ marginBottom: 4 }}></hr>
      <p style={{ fontStyle: "italic" }}>
        {newspaper} | &#9733;&#9733;&#9733;&#9733;&#9733;{" "}
      </p>
    </div>
  )
}

const IndexPage = ({ data }) => {
  const reviews = data.allDatoCmsFrontpageReview.edges
  return (
    <>
      <SEO title="Home" />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          backgroundImage: `url(${indexBG})`,
          backgroundPosition: "center",
        }}
      >
        <div style={componentStyle}>
          <div>
            <h1 style={{ marginBottom: 30, fontSize: "5rem" }}>
              <Link
                to="/"
                style={{
                  color: `beige`,
                  opacity: 0.7,
                  textDecoration: `none`,
                }}
              >
                {"Ben Maratos"}
              </Link>
            </h1>
          </div>
            <h4 >
              <Link style={mainLinkStyle} className="main-link" to="/poems/">Gedichten</Link>
            </h4>
            <h4 >
              <Link style={mainLinkStyle} className="main-link" to="/stories/">Verhalen</Link>
            </h4>
            <h4 >
              <Link style={mainLinkStyle} className="main-link" to="/bio/">Bio</Link>
            </h4>
        </div>
      </div>
    </>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allDatoCmsFrontpageReview {
      edges {
        node {
          newspaper
          text
        }
      }
    }
  }
`
