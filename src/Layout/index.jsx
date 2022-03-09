import PropTypes from "prop-types";
import "./layout.scss";

function Layout({ children }) {
  return (
    <div className="layout_container">
      <main className="layout_main">{children}</main>
    </div>
  );
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

Layout.defaultProps = {
  children: null,
};
