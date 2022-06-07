import PropTypes from "prop-types";
import "./forecastCard.scss";

function ForecastCard({ hour, icon, condition, className }) {
  return (
    <div className={`card_container ${className}`}>
      <h4>{hour}</h4>
      <img src={icon} alt={`${condition} icon`} />
      <p>{condition}</p>
    </div>
  );
}

export default ForecastCard;

ForecastCard.propTypes = {
  hour: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  icon: PropTypes.string,
  condition: PropTypes.string,
  className: PropTypes.string,
};

ForecastCard.defaultProps = {
  hour: "na:na",
  icon: "",
  condition: "unknown",
  className: "",
};
