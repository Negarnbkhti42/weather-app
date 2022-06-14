import PropTypes from "prop-types";
import { Route, Routes } from "react-router-dom";
import "./layout.scss";

function Layout({ children }) {
  return (
    <div className="layout_container">
      <Routes>
        <Route
          path="/"
          element={<div className="layout_main">{children}</div>}
        />
      </Routes>
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
