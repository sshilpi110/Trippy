import Navbar from "../Component/Navbar";
import Hero from "../Component/Hero";
import ContactImg from "../assests/2.jpg"


const Contact = () => {
    return (
        <div className="hero-mid">
        <Navbar />
        <Hero
            cName="hero-mid"
            heroImg={ContactImg}
            title="Contact"
            btnClass="hide"
        />

    </div>
    )
}
export default Contact;
