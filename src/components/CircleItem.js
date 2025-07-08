import circle from "../assets/circle.json";

const CircleItem = () => {
  console.log( circle );
  return (
    <div id="circle">
      <h2>NEW COLLECTION</h2>
      <p>소소한 일상에 작은 설렘을 더해줄 감성 문구 컬렉션!</p>
      <h3>우정, 공부, 힐링, 다꾸까지 - 각자의 이야기를 담은 랜덤박스를 만나보세요</h3>
      <ul>
        {
          circle.map((item)=>{
            return (
              <li key={item.id}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/circle_small/${item.filename}`}
                  alt={item.title}
                />
                <p>{item.title}</p>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default CircleItem;