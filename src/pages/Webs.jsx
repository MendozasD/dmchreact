import Website from "../components/WebsList";
import MainContent from "../components/MainContent";

export default function Webs() {
  return (
    <>
      <MainContent title="Web Design">
        <Website
          webName="franklogemann"
          title="Frank Logemann"
          comment="Whatever is just a the title"
          img={3}
        />
        <Website
          webName="rolfsommer"
          title="Rolf Sommer"
          comment="Whatever is just a the title"
          img={2}
        />
      </MainContent>
    </>
  );
}
