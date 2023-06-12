import Hero from "../Component/Hero"
import Navbar from "../Component/Navbar"

const Home = () => {
    return (
        <div>
            <Navbar />
             <Hero
               cName="hero"
               heroImg="https://images.unsplash.com/photo-1532931899774-fbd4de0008fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80"
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
