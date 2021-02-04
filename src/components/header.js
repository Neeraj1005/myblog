import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import Menu from './menu'

const Header = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <header class="text-gray-700 bg-white border-t border-b body-font">
        <Menu siteTitle={data.site.siteMetadata?.title || `Title`} />
      </header>
    </>
  )
}

export default Header
