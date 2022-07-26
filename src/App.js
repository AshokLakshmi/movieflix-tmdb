import React from "react";
import Routers from "./routers/Routers";
import BannerComponent from "./component/banner_component/BannerComponent";
import HeaderComponent from "./component/header_component/HeaderComponent";
import FooterComponent from "./component/footer_component/FooterComponent";

function App() {
  return (
    <>
      <HeaderComponent />
      <div className="main__content">
        <div className="container">
          <Routers />
        </div>
      </div>
      <FooterComponent />
    </>
  );
}

export default App;
