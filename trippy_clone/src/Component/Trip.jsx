import "./TripStyle.css"
import TripData from "./TripData";
import Trip1 from "../assests/5.jpg"
import Trip2 from "../assests/8.jpg"
import Trip3 from "../assests/6.jpg"

function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destination using google Maps.</p>
            <div className="tripcard">
                <TripData
                  image={Trip1}
                  heading="Trip in Indonesia"
                   text="Indonesia is climatically comfortable throughout the year, though the best time to visit is from April to October. The peak tourist season lasts from July to August, though April to September are the best months to visit. Even though this is the rainy season, you will bag great deals since this is lean tourist season. "
                />
                <TripData
                  image={Trip2}
                  heading="Trip in Malasiya"
                   text="A Malaysia tour package offers an array of different places to stay for its visitors. You can choose from budget hotels, boutique hotels, luxury hotels or resorts according to your preferences and budget. If you are looking for luxury hotels in Malaysia, you can consider The Datai Langkawi, The Ritz Carlton, The Banjaran Hotsprings, etc. for luxury, relaxation and rejuvenation. "
                />
                <TripData
                  image={Trip3}
                  heading="Trip in France"
                   text="France is a country that is popular for unique places. These unique places are handpicked and added to the France tour packages. There are several ski resorts in France. The popular ones are listed below: ● Chamonix: This is France's most well-known skiing resort, located at the foot of Mt Blanc. Les Houches, Grands Montets, Le Tour/Balme, Le Brevent, and La Flegere are among the five ski resorts that make up the Gateway to European Cascades "
                />

            </div>
        </div>
    )
}
export default Trip ;