import LatestGameCard from "./LatestGameCard/LatestGameCard.js";

const LatestGames = () => {

    return (

        <div id="home-page">
            <h1>Latest Games</h1>
            <LatestGameCard />
            <p className="no-articles">No games yet</p>
        </div>

    );

};

export default LatestGames;