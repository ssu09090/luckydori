
const Banner = () => {
  return (
    <div id="banner">
      <div className="event">
        <div className="one">
          <p>히노키의 감성을 담은 새로운 문구 컬렉션을 만나보세요</p>
        </div>
        <div className="two">
          <p>감성별 추천 박스 보기</p>
        </div>
        <div className="three">
          <img
          src={`${process.env.PUBLIC_URL}/images/logo.png`}
          alt="luckyDori 손글씨 모양의 핑크색상 로고"/>
        </div>
      </div>
    </div>
  );
};

export default Banner;