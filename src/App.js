import { Component, Fragment } from "react";
import Home from "./components/home";
import CallUs from "./components/call us";
import Tools from "./components/tools";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer.js";

class App extends Component {
  animation = (id) => {
    const thesection = document.querySelector(`.section${id + 1}`);
    thesection.style.display = "block";
    setTimeout(() => {
      window.scrollTo({
        left: 0,
        top: thesection.offsetTop,
      });
    }, 500);
    if (id === 2) {
      const footer = document.querySelector(".footer");
      footer.style.display = "block";
    }
  };

  render() {
    return (
      <Fragment>
        <Home animation={this.animation} />
        <Tools animation={this.animation} />
        <Portfolio />
        <CallUs />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
