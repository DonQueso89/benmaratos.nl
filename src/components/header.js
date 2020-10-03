import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const ActivatableLink = ({ children, to }) => {
  return (
    <Link to={to} activeClassName="active">
      {children}
    </Link>
  )
}

const Header = ({ siteTitle }) => (
  <header
    style={{
      backgroundColor: `rgba(20, 20, 100, .30)`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
        flexDirection: `row`,
        justifyContent: `flex-end`,
      }}
    >
      <h1
        style={{
          flex: 1,
          marginRight: `auto`,
          marginBottom: 0,
          fontSize: "2.25rem",
        }}
      >
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <h4 style={{ marginRight: `20px`, textDecoration: `none` }}>
        <ActivatableLink to="/poems/">Gedichten</ActivatableLink>
      </h4>
      <h4 style={{ marginRight: `20px`, textDecoration: `none` }}>
        <ActivatableLink to="/stories/">Verhalen</ActivatableLink>
      </h4>
      <h4 style={{ marginRight: `20px`, textDecoration: `none` }}>
        <ActivatableLink to="/bio/">Bio</ActivatableLink>
      </h4>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
