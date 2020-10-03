import React, { useState, useEffect } from "react"
import { Link, graphql } from "gatsby"

import SEO from "../components/seo"
import "../styles/index.css"

const componentStyle = {
  padding: `1.45rem 1.0875rem`,
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  width: "auto",
  height: "100vh",
  background: `rgba(20, 20, 100, .3)`,
  flex: 1,
}

const Review = ({ title, newsPaper, ...extraStyle }) => {
  const [opacity, setOpacity] = useState(0)
  useEffect(() => {
    setOpacity(1.0)
  }, [setOpacity])
  return (
    <div
      className={"review"}
      style={{ opacity, position: "relative", ...extraStyle }}
    >
      <h4 style={{ marginBottom: 2 }}>{title}</h4>
      <hr style={{ marginBottom: 4 }}></hr>
      <p style={{ fontStyle: "italic" }}>
        {newsPaper} | &#9733;&#9733;&#9733;&#9733;&#9733;{" "}
      </p>
    </div>
  )
}

const IndexPage = ({ data }) => {
  return (
    <>
      <SEO title="Home" />
      <div style={{ display: "flex", justifyContent: "row" }}>
        <div style={componentStyle}>
          <Review
            title={
              '"Zijn verhalen lezen als een lollige rouwkaart zonder einde"'
            }
            newsPaper={"Dagelijks Dagblad"}
          />
        </div>
        <div style={componentStyle}>
          <div>
            <h1 style={{ marginBottom: 30, fontSize: "5rem" }}>
              <Link
                to="/"
                style={{
                  color: `black`,
                  textDecoration: `none`,
                }}
              >
                {data.site.siteMetadata.title}
              </Link>
            </h1>
          </div>
          <div>
            <h4
              style={{
                marginRight: `20px`,
                textDecoration: `none`,
                fontSize: "2.5rem",
              }}
            >
              <Link to="/poems/">Gedichten</Link>
            </h4>
            <h4
              style={{
                marginRight: `20px`,
                textDecoration: `none`,
                fontSize: "2.5rem",
              }}
            >
              <Link to="/stories/">Verhalen</Link>
            </h4>
            <h4
              style={{
                marginRight: `20px`,
                textDecoration: `none`,
                fontSize: "2.5rem",
              }}
            >
              <Link to="/bio/">Bio</Link>
            </h4>
          </div>
        </div>
        <div style={componentStyle}>
          <Review
            title={'"Het onwaarschijnlijke kind van Hemingway en Poe"'}
            newsPaper={"Algemene Standaard"}
            marginBottom={"400px"}
          />
          <Review
            title={'"Geen woord gerept over de nieuwe Ferrari GZX500"'}
            newsPaper={"AutoMagazine"}
          />
        </div>
      </div>
    </>
  )
}

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
