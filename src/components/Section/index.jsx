import PropTypes from "prop-types";
import "./section.scss";

function Section({ children }) {
  return <section className="section_main">{children}</section>;
}

export default Section;

Section.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

Section.defaultProps = {
  children: null,
};
