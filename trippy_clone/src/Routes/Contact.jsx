import Hero from "../Component/Hero";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import ContactForm from "../Component/ContactForm";

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
        <ContactForm/>
        <Navbar/>
        <Footer/>
     

    </div>
    )
}
export default Contact;
