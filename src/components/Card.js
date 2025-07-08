import { useState } from "react";

const Card = ({ item, isHover, onAdd }) => {
  const { title, price, filename, available } = item;
  const [checkHover, setCheckHover] = useState(false);
  const [showMsg,setShowMsg]=useState(false);
  const handleAddClick = () => {
    onAdd(item);
    setShowMsg(true);
    setTimeout(()=>{
      setShowMsg(false);
    },2000);
  };
  const getImageSrc = () => {
    if (!isHover) return `${process.env.PUBLIC_URL}/images/new/${filename}`;
    //호버가 된다면
    if (checkHover) {
      return `${process.env.PUBLIC_URL}/images/new/${filename.replace(
        "-1",
        "-2"
      )}`;
    }
    return `${process.env.PUBLIC_URL}/images/new/${filename}`;
  };
  return (
    <div
      className="card"
      onMouseEnter={() => {
        setCheckHover(true);
      }}
      onMouseLeave={() => {
        setCheckHover(false);
      }}
    >
      {available && <p className="card-btn">재입고되었습니다</p>}
      <img className="card-img" src={getImageSrc()} alt={title} />
      {
        showMsg && <p className="popup-msg">장바구니에 담겼습니다</p>
      }
      <p className="card-title">{title}</p>
      <p className="card-price">{`￦ ${price}`}</p>
      <button className="card-add" onClick={handleAddClick}>
        Add Cart
      </button>
    </div>
  );
};

export default Card;
