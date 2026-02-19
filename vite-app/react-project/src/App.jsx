import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    /*
     App (Root Component)
    -> Header       
    -> Main          
    -> Footer   

    Flow:
        index.html
            → main.jsx (React entry point)
            → App.jsx (Root component)
            → Header, Main, Footer (Child components)
*/     
    <>
      <Header />        { /* Displays the top navigation and title */}
      <Main />          { /* Contains the main content of the page*/}
      <Footer />        { /* Displays footer information*/}
    </>
  );
}

export default App;