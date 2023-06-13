import Navbar from "../Component/Navbar";
import Hero from "../Component/Hero";
import Trip from "../Component/Trip"
import Footer from "../Component/Footer";
import ServicesImg from "../assests/1.jpg"

const Services = () => {
    return (
        <div className="hero-mid">
        <Navbar />
        <Hero
            cName="hero-mid"
            heroImg={ServicesImg}
            title="Services"
            btnClass="hide"
        />
        <Trip/>
        <Footer/>
        </div>
    )
}
export default Services;
