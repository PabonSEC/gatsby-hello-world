import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <div>
      <h1>About me</h1>
      <p>I’m good enough, I’m smart enough, and gosh darn it, people like me!</p>
    </div>

    <br/>
    <br/>

    <h1>About {data.site.siteMetadata.title}</h1>
    <p>
      We're the only site running on your computer dedicated to showing the best
      photos and videos of pandas eating lots of food.
    </p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
  `