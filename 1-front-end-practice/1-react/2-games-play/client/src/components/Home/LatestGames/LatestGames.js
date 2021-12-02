import { useState, useEffect } from 'react';
import { getRecentGames } from '../../../services/gameService.js';
import LatestGameCard from "./LatestGameCard/LatestGameCard.js";

const LatestGames = () => {

    const [games, setGames] = useState([]);

    useEffect(() => {

        getRecentGames()
            .then(games => setGames(games.slice(0, 3)))
            .catch(err => alert(err));

    }, []);

    return (

        <div id="home-page">
            <h1>Latest Games</h1>

            {games.length
                ? games.map(g => <LatestGameCard key={g._id} game={g} />)
                : <p className="no-articles">No games yet</p>
            }

        </div>

    );

};

export default LatestGames;