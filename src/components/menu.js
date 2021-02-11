import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Menu = ({ siteTitle }) => (
  <>
    <header class="text-gray-700 bg-gray-200 border-t border-b body-font">
      <div className="container flex flex-col flex-wrap p-5 mx-auto md:items-center md:flex-row ">
        <Link to="/" className="headerLogo sm:text-center">
          {siteTitle}
        </Link>
        <nav className="navHeadLinkButton">
          <Link
            to="/about/"
            className="navSubLinkButton"
            activeClassName="activeMenu"
          >
            {`About`}
          </Link>

          <Link
            to="/page-2/"
            className="navSubLinkButton"
            activeClassName="activeMenu"
          >
            {`Contact`}
          </Link>

          <Link
            to="/blog/"
            className="navSubLinkButton"
            activeClassName="activeMenu"
          >
            {`Blog`}
          </Link>
          <img
            className="w-8 h-8 rounded-full content-center"
            src="https://unavatar.now.sh/github/Neeraj1005?fallback=https://s3.amazonaws.com/laracasts/images/forum/avatars/default-avatar-29.png"
            alt=""
          />
        </nav>
      </div>
    </header>
  </>
)
Menu.propTypes = {
  siteTitle: PropTypes.string,
}

Menu.defaultProps = {
  siteTitle: ``,
}
export default Menu
