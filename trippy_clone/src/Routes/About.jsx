import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import Hero from "../Component/Hero";
import AboutUs from "../Component/AboutUs";
import AboutImg from "../assests/night.jpg"


const About = () => {
    return (
        <div className="hero-mid">
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={AboutImg}
                title="About"
                btnClass="hide"
            />
            <AboutUs/>
            <Footer/>

        </div>
    )
}
export default About;
