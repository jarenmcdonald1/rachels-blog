import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

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
    <div
      style={{
        display: `flex`,
      }}
    >
      <Image
        fluid={data.avatar.childImageSharp.fluid}
        alt={author.name}
        style={{
          marginBottom: 0,
          minWidth: 50,
          maxWidth: 50,
          maxHeight: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>Hello, I'm <span className="font-weight-bold">{author.name}</span>! {author.summary}</p>
    </div>
  )
}

export default Bio
