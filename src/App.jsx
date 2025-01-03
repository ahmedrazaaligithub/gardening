import { BrowserRouter,Link,Route,Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Service from "./components/service";
import Feedback from "./components/feedback";
import Faqs from "./components/faqS";
import Navbar from "./components/navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
    <div className=" !container mx-auto">

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/service" element={<Service/>} />
      <Route path="/faq" element={<Faqs/>} />
      <Route path="/feedback" element={<Feedback/>} />
    
      

      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
