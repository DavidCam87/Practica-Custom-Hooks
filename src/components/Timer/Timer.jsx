import "./Timer.css"

// eslint-disable-next-line react/prop-types
const Timer = ({ time }) => {
  return (
    <div className="Timer">
      <h2>Son la/s {time} en Sevilla</h2>
    </div>
  );
};

export default Timer;