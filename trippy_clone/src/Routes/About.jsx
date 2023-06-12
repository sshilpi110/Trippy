import Navbar from "../Component/Navbar";
import Hero from "../Component/Hero";
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

        </div>
    )
}
export default About;
