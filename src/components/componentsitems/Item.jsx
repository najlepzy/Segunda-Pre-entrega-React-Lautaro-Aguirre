import Image from "./Image";
import "../../styles/cardItem.css";
import Description from "./Description";
import AddItemButton from "./AddItemButton";
import { Link } from "react-router-dom";
import goToCart from "./goToCart";

const Item = (props) => {
  return (
    <div className="cardItem">
      <Image imagen={props.imagen} />
      <Description
        title={props.title}
        cantidad={props.cantidad}
        precio={props.precio}
      />
      <div className="buttons">
        <Link to={`/item/${props.id}`}>
          <goToCart txt="Ver detalles" />
        </Link>

        <AddItemButton />
      </div>
    </div>
  );
};

export default Item;
