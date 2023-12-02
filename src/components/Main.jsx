import Join from "./Join";
import Founders from "./Founders";
import BetaInfo from "./BetaInfo";

export default function Main() {
  return (
    <div className="main">
      <Join />
      <div className="main__founders-container">
        <Founders />
      </div>
      <div className="main__beta-info-container">
        <BetaInfo />
      </div>
    </div>
  );
}
