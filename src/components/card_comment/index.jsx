import PropTypes from "prop-types";
import style from "./index.module.css";
import star from "../../assets/star.svg";
import { Links } from "../link_component";
const Card = ({ item }) => {
  return (
    <div className={style.comment_card}>
      <div className={style.top}>
        <div className={style.left}>
          <div className={style.name}>{item.name}</div>
          <div className={style.location}>{item.location}</div>
        </div>
        <div className={style.links}>
          <Links />
        </div>
      </div>
      <div className={style.stars}>
        {Array(item?.raiting)
          .fill(null)
          .map((_, index) => (
            <div key={index} className={style.star}>
              <img src={star} />
            </div>
          ))}
      </div>
      <p className={style.text}>{item.text}</p>
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    raiting: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
