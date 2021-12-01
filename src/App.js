import Footer from "./components/common/Footer";
import Nav from "./components/common/Nav";
import Main from "./components/Main";


export const App = () => {
 
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

export default App;
