import LatestGameCard from "./LatestGameCard/LatestGameCard.js";

const LatestGames = () => {

    return (

        <div id="home-page">
            <h1>Latest Games</h1>
            <LatestGameCard />
            <p class="no-articles">No games yet</p>
        </div>

    );

};

export default LatestGames;