import { useState, useEffect } from 'react';

import { getAllGames } from '../../services/gameService.js';
import CatalogGameCard from "./CatalogGameCard/CatalogGameCard.js";

const Catalog = () => {

    const [games, setGames] = useState([]);

    useEffect(() => {

        getAllGames()
            .then(games => setGames(games))
            .catch(err => alert(err));

    }, []);

    return (

        <section id="catalog-page">
            <h1>All Games</h1>

            {games.length
                ? games.map(g => <CatalogGameCard key={g._id} game={g} />)
                : <h3 className="no-articles">No articles yet</h3>
            }

        </section>

    );

};

export default Catalog;