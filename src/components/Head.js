import { BsCartCheck } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Head = () => {
  const navigate = useNavigate();
  return (
    <header>
      <img
        onClick={() => {
          navigate("/");
        }}
        src={`${process.env.PUBLIC_URL}/images/logo.png`}
        alt="luckyDori 손글씨 모양의 핑크색상 로고"
      />
      <div
        onClick={() => {
          navigate("/cart");
        }}
      >
        <BsCartCheck />
        <p>쇼핑카트</p>
      </div>
    </header>
  );
};

export default Head;