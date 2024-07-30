import Website from "../components/WebsList";
import MainContent from "../components/MainContent";
import "../styles/Webs.scss";
import rolf1 from "/rolf/rolfsommer_01.mp4";
import rolf2 from "/rolf/rolfsommer_02.png";
import rolf3 from "/rolf/rolfsommer_03.png";
import frank1 from "/frank/franklogermann_01.png";
import frank2 from "/frank/franklogermann_02.png";
import frank3 from "/frank/franklogermann_03.png";

export default function Webs() {
  return (
    <>
      <MainContent title="Pages">
        <Website webName="Rolf Sommer" projectLink={"http://rolfsommer.net"}>
          <video src={rolf1} autoPlay loop muted />
          <img src={rolf2} alt="rolf2" />
          <img src={rolf3} alt="rolf3" />
        </Website>
        <Website webName="Frank Logermann">
          <img src={frank1} alt="frank1" />
          <img src={frank2} alt="frank2" />
          <img src={frank3} alt="frank3" />
        </Website>
        <Website webName="Einfach Konjugieren" />
        <Website webName="Coljena" />
      </MainContent>
    </>
  );
}
