import { RiDeleteBinLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const CartPage = ({ cart, onDelete }) => {
  const navigate = useNavigate();
  const totalPrice = cart.reduce((sum, item) => {
    return sum + (item.price*item.count);
  }, 0);
  return (
    <div className="cart-page">
      <h2>My CART</h2>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <h3>Your cart is empty!</h3>
          <p>Add your favority items to your cart.</p>
          <button className="home" onClick={()=>{navigate('/')}}>Shop Now</button>
        </div>
      ) : (
        <>
          <ul>
            {cart.map((item) => {
              return (
                <li>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/new/${item.filename}`}
                    alt={item.title}
                  />
                  <div className="item-info">
                    <h4>{item.title}</h4>
                    <h3>{item.price}</h3>
                    <p>수량 : {item.count}</p>
                  </div>
                  <p
                    className="item-icon"
                    onClick={() => {
                      onDelete(item.id);
                    }}
                  >
                    <RiDeleteBinLine />
                  </p>
                </li>
              );
            })}
          </ul>
          <div className="cart-summary">
            <div className="summary-price">
              <p>총 결제 금액 : </p>
              <h3>{totalPrice}</h3>
            </div>
            <button>주문하기</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
