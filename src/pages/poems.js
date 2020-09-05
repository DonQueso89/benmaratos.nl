import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Poem = () => (
    <>
  <h3>Amsterdam</h3>
  <p>
    Vastgoed hier vastgoed daar
    <br/>
    Losgoed hier wasgoed daar
    <br/>
    Vastgoed hier landgoed daar
    <br/>
    Kopen kopen kopen maar
    <br/>
    Vroom vroom
    <br/>
    Kleng kleng
    <br/>
    Beng beng
    <br/>
    En die boom
    <br/>
    staat daar nog steeds van jou te genieten
  </p>
  </>
)

const Poems = () => (
  <Layout>
    <SEO title="Poems" />
    <Poem />
    <Link to="/">Home</Link>
  </Layout>
)

export default Poems
