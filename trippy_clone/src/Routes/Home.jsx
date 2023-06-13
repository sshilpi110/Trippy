import Destination from "../Component/Destination"
import Footer from "../Component/Footer"
import Hero from "../Component/Hero"
import Navbar from "../Component/Navbar"
import Trip from "../Component/Trip"
import HomeImg from "../assests/12.jpg"
const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero
                cName="hero"
                heroImg={HomeImg}
                title="Your Journey Your Story"
                text="Choose your Favourite Destination."
                btnText="Travel Plan"
                url="/"
                btnClass="show"
            />
            <Destination />
          <Trip/>
          <Footer/>
        </div>
    )
}
export default Home;
