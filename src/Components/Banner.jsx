import Nav from "./Nav";
import PortfolioBanner from "./PortfolioBanner";

export default function Banner() {
  return (
    <div className="w-full relative" id="home">
      <Nav></Nav>
      <div className="w-full h-full">
        <PortfolioBanner></PortfolioBanner>
      </div>
    </div>
  );
}
