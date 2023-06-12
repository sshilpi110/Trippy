import Hero from "../Component/Hero"
import Navbar from "../Component/Navbar"
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
        </div>
    )
}
export default Home;
