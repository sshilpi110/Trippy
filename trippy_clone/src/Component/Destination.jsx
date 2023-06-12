import "./destinationStyles.css";
import Mountain1 from "../assests/1.jpg";
import Mountain2 from "../assests/2.jpg";
import Mountain3 from "../assests/3.jpg";
import Mountain4 from "../assests/4.jpg";
import DestinationData from "./DestinationData";


const Destination = () => {
    return (
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>Tours give you the opportunity to see a lot within a time frame</p>
            <DestinationData 
            className="first-des"
             heading="Taal Volcano, Batangas"
             text="Taal Volcano is a large caldera in Batangas that was formed by prehistoric eruptions. In the wake of the eruptions, it was eventually filled by Taal Lake. Throughout history it has erupted about 38 times, making it the second most active volcano in the Philippines. The best time to visit the island is from late December to late May as there are fewer chances of rainfall during these months. However, make sure to double-check with the local government units and tourism office before your planned trip to confirm if the volcano is safe to visit as it is still considered active."
             img1={Mountain1}
             img2={Mountain2}
            />
            <DestinationData 
            className="first-des-reverse"
             heading=" Mt.Daguldul ,Batangas"
             text="Taal Volcano is a large caldera in Batangas that was formed by prehistoric eruptions. In the wake of the eruptions, it was eventually filled by Taal Lake. Throughout history it has erupted about 38 times, making it the second most active volcano in the Philippines. The best time to visit the island is from late December to late May as there are fewer chances of rainfall during these months. However, make sure to double-check with the local government units and tourism office before your planned trip to confirm if the volcano is safe to visit as it is still considered active."
             img1={Mountain3}
             img2={Mountain4}
            />

        </div>

    )
}
export default Destination;