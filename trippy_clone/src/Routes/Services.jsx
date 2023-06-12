import Navbar from "../Component/Navbar";
import Hero from "../Component/Hero";
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
        </div>
    )
}
export default Services;
