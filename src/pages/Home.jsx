import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import Signature from "../components/Signature";
import MouseGlow from "../components/MouseGlow";
import Reservation from "../components/Reservation";
const Home = () => {
    return (
        <div>
            <Hero/>
            <Intro/>
            <Signature/>
            <Experience/>
            <Reservation/>
        </div>
    );
};

export default Home;