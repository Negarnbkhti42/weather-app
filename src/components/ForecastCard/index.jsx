import "./forecastCard.scss";

function ForecastCard({ hour, icon, condition }) {
  return (
    <div className="card_container">
      <h4>{hour}</h4>
      <img src={icon} alt={`${condition} icon`} />
      <p>{condition}</p>
    </div>
  );
}

export default ForecastCard;
