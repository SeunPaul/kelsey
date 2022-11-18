import { Toaster } from "react-hot-toast";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Brochure from "./components/brochure/Brochure";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Toaster />
      <Header />
      <About />
      <Services />
      <Brochure />
    </div>
  );
}

export default App;
