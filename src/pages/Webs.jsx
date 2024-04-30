import Website from "../components/WebsList";
import MainContent from "../components/MainContent";

export default function Webs() {
  return (
    <>
      <MainContent title="Web Design">
        <Website webName="Whatever" comment="Whatever is just a the title" />
        <Website webName="Nonesense" />
      </MainContent>
    </>
  );
}
