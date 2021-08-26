import { useState } from "react";
import "./App.scss";
import Footer from "./Footer";
import Header from "./Header.js";
import Homepage from "./Homepage.js";

function App() {
  const [menu, setMenu] = useState(false);

  const handleMenuClick = (event) => {
    setMenu(!menu);
  };

  if (menu) {
    document.getElementById("html").style.overflow = "hidden";
  }else {
    document.getElementById("html").style.overflow = "scroll";

  }
  return (
    <main>
      <Header menu={menu} handleMenuClick={handleMenuClick} />
      <Homepage menu={menu} handleMenuClick={handleMenuClick} />
      <Footer />
    </main>
  );
}

export default App;
