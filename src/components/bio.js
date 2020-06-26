import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import '../styles/index.scss'

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  return (
    <section className="mb-4 d-flex justify-content-center align-items-center">
      <Image fluid={data.avatar.childImageSharp.fluid} alt={author.name} className="bio-img w-100 h-100 rounded-circle" />
      <p className="pl-2 mb-0">Hello, I'm <span className="font-weight-bold">{author.name}</span>! {author.summary}</p>
    </section>
  )
}

export default Bio
