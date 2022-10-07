import logo from './logo.svg';
import './App.css';
import Abc from "./Components/Abc/Abc";
import Header from "./Components/Header/Header";
import Main_home from "./Components/Main_home/Main_home";
import Animation from "./Components/Animation/Animation";
import About from "./Components/About/About";
import Aos from "./Components/Aos/Aos";
import Clients from "./Components/Clients/Clients";
import Footer from "./Components/Footer/Footer";




function App() {
  return (
    <div className="App">
     <Header/>
      <Main_home/>
      <Animation />
      {/* <About/> */}
      <Aos/>
      <Clients/> 
      <Footer/>
    </div>
  );
}

export default App;
