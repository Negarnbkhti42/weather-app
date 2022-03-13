import PropTypes from "prop-types";
import SearchBar from "../components/SearchBar";
import "./layout.scss";

function Layout({ children }) {
  return (
    <div className="layout_container">
      <SearchBar />
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
