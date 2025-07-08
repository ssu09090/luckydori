import data from "../assets/insta.json";

const Insta = () => {
  return (
    <div className="insta">
      <div className="insta-msg">
        <p>전 세계 100만 명의 감성러버들이 선택한 #LuckyDori</p>
        <h3>여러분의 다꾸 감성을 함께 나누어요</h3>
        <p>
          오늘도 당신의 하루를 더 특별하게 만들어 줄 <br /> 문구템이 기다리고
          있습니다
        </p>
      </div>
      <ul>
        {data.map((item) => {
          return (
            <li key={item.id}>
              <img src={`${process.env.PUBLIC_URL}${item.image}`} />
              <div className="msg">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Insta;
