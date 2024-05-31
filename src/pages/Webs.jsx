import Website from "../components/WebsList";
import MainContent from "../components/MainContent";

export default function Webs() {
  return (
    <>
      <MainContent title="Web Design">
        <Website
          webName="Rolf Sommer"
          comment="Schauspieler, Regiesseur, Texter"
        />
        <Website webName="Nonesense" />
      </MainContent>
    </>
  );
}
