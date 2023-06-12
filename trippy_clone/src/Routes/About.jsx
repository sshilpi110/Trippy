import React from "react"
import aboutImg from "../assests/night.jpg";
import Navbar from "../Component/Navbar";
const About = () => {
        return (
        <div>
        <Navbar />
             <About
               cName="hero"
               heroImg={aboutImg}
               title="Your Journey Your Story"
               text="Choose your Favourite Destination."
               btnText="Travel Plan"
               url="/"
               btnClass="show"
             />
        </div>
    )
}
export default About;
