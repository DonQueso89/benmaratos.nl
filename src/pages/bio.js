import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Bio = () => (
  <Layout>
    <SEO title="Bio" />
    <p>
      Mijn eerste "publicatie" is een gedicht op het vrouwentoilet van mijn stamkroeg. Volgens mijn vriend en de eigenaar wordt er veel over gesproken. De vrouwen komen stralend van de plee en gaan glijdend naar huis omdat er zo van hen gehouden wordt. Ik ben de maker onder pseudoniem en niemand houdt van mij.
    </p>
    <Link to="/">Home</Link>
  </Layout>
)

export default Bio
