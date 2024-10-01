import "./App.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Initialize AOS with custom settings for smoother animations
    AOS.init({
      duration: 1000, // Controls the duration of the animations (in ms)
      easing: "ease-in-out", // Easing function for smoother transitions
      once: true, // Whether animation should happen only once or every time you scroll
      delay: 100, // Adds a delay before animations start
    });
  }, []);
  AOS.init();
  return <div></div>;
}

export default App;
