import Website from "../components/WebsList";
import MainContent from "../components/MainContent";
import "../styles/Webs.scss";

export default function Webs() {
  return (
    <>
      <MainContent title="Pages">
        <Website webName="Rolf Sommer" comment={"Rolf Sommer.net"} />
        <Website webName="Frank Logermann" comment={"franklogemann.de"} />
        <Website webName="Einfach Konjugieren" />
        <Website webName="Coljena" />
      </MainContent>
    </>
  );
}
