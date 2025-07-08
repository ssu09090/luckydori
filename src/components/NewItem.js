import Card from "./Card";
import carditem from "../assets/new-items.json";

const NewItem = ({ onAddCart }) => {
  return (
    <div className="new-item">
      {/* card 호출 : img,title,price,isActive,isHover */}
      {carditem.map((item) => {
        return (
          <Card key={item.id} item={item} isHover={true} onAdd={onAddCart} />
        );
      })}
      
    </div>
  );
};

export default NewItem;
