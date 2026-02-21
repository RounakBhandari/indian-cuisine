import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Signature from "./components/Signature";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Intro/>
      <Signature/>
    </div>
  );
};

export default App;