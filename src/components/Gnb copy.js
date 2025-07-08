import { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";

const Gnb = () => {
  const [isOpen,setIsOpen]=useState(false);

  return (
    <nav className={isOpen ? "mobile-open" : ""}>
      <button onClick={()=>{setIsOpen(!isOpen)}}>
        <MdOutlineMenu />
      </button>
      <ul className="menu">
        <li>전체 보기 👀</li>
        <li>인기 박스 💝</li>
        <li>신상 박스 🧡</li>
        <li>다시 찾아온 문구들 🔄</li>
      </ul>
      <div className="box">
        <p>감성별 추천</p>
        <ul className="box-menu">
          <li>설렘 박스 💌</li>
          <li>집중 박스 📚</li>
          <li>힐링 박스 🌿</li>
          <li>우정 박스 🤝</li>
          <li>다꾸 박스 🎀</li>
        </ul>
      </div>      
    </nav>
  );
};

export default Gnb;
