import { Toaster } from "react-hot-toast";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Brochure from "./components/brochure/Brochure";
import Faqs from "./components/faqs/Faqs";
import Bookings from "./components/bookings/Bookings";
import Contact from "./components/contact/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Toaster />
      <Header />
      <About />
      <Services />
      <Brochure />
      <Faqs />
      <Bookings />
      <Contact />
    </div>
  );
}

export default App;
