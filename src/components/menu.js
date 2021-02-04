import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Menu = ({ siteTitle }) => (
    <div class="container flex flex-col flex-wrap p-5 mx-auto md:items-center md:flex-row ">
        <Link
          to="/"
          className="headerLogo"
        >
          {siteTitle}
        </Link>
        <nav class="navHeadLinkButton">
          <Link
            to="/about/" className="navSubLinkButton"
          >
            {`About Us`}
          </Link>
          
          <Link
            to="/page-2/"
            className="navSubLinkButton"
          >
            {`Contact Us`}
          </Link>
        </nav>
        <button
          class="btnPrimary"
          id="user-menu"
          aria-haspopup="true"
        >
          <span class="sr-only">Open user menu</span>
          <img
            class="w-8 h-8 rounded-full "
            src="https://res.cloudinary.com/the-unicorns-feed/image/upload/v1606463246/avatars/mke2_wnzylr.png"
            alt=""
          />
        </button>
    </div>
)
Menu.propTypes = {
    siteTitle: PropTypes.string,
}

Menu.defaultProps = {
    siteTitle: ``,
}
export default Menu