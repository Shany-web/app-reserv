import { FaStar } from "react-icons/fa";
import "./star.css";

const Stars = ({ rating = 5, total = 5 }) => {
  const list = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <div
      className="stars"
      role="img"
      aria-label={`Calificación: ${rating} de ${total}`}
    >
      {list.map((n) => (
        <FaStar key={n} size={14} color={n <= rating ? "#f5b301" : "#d9d9d9"} />
      ))}
    </div>
  );
};

export default Stars;
