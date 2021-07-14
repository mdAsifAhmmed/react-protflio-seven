import HaddingApp from "./conponets/headingCom/HaddingApp";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About from "./conponets/AbutCom/AbutComApp";
import Abilites from "./conponets/Abilites/AbilitesApp";
import Sarvice from "./conponets/ServiceCom/ServiceApp";
import Hire from "./conponets/Hire/Hire";
import CreativeApp from "./conponets/Creative__works/CreativeApp";
import Count from "./conponets/Count__up/CountApp";
import News from "./conponets/News/NewsApp";
import TuchApp from "./conponets/Tuch/TuchApp";
import Footer from "./conponets/Footer/FooterApp";
import Slick_App from "./conponets/Slick__Item/Slick_App";

function App() {
  return (
    <>
      <HaddingApp />
      <About />
      <Abilites />
      {/* <Sarvice /> */}
      <Hire />
      <CreativeApp />
      <Slick_App />
      <Count />
      <News />
      <TuchApp />
      <Footer />
    </>
  );
}

export default App;
