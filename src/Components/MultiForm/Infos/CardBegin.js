import "./Card.css";

const CardBegin = (props) => {
  const { modifyIndex } = props;

  return (
    <div className="card">
      <h1>🍣 Help us to delight your taste buds 🌶️</h1>
      <button onClick={() => modifyIndex(2)}>Start</button>
    </div>
  );
};

export default CardBegin;
