import React from "react";
import Footer from "./components/common/Footer";
import Nav from "./components/common/Nav";
import Main from "./components/Main";


class App extends React.Component {

  render() {
    return (
      <>
        <div className="wrapper">
          <Nav/>
                <Main />
          <Footer/>
        </div>
      </>
    );
  }
}

export default App;