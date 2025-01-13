import "./App.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: "ease-in-out", 
      once: true,
      delay: 100, 
    });
  }, []);
  AOS.init();
  return <div></div>;
}

export default App;
