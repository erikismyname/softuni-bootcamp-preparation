import WelcomeMsges from "./WelcomeMsges/WelcomeMsges.js";
import LatestGames from "./LatestGames/LatestGames.js";

const Home = () => {

    return (

        <section id="welcome-world">

            <WelcomeMsges />

            <img src="./images/four_slider_img01.png" alt="hero" />

            <LatestGames />

        </section>

    );

};

export default Home;