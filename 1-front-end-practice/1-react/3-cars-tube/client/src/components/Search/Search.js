import { useState } from 'react';

import { filterCarsByYear } from '../../services/carService.js';

import CarCard from '../../components/common/CarCard/CarCard.js';

const Search = () => {

    const [isSearched, setIsSearched] = useState(false);

    const [cars, setCars] = useState([]);

    const onSearchFormSubmit = async (ev) => {

        ev.preventDefault();

        const year = ev.target.search.value.trim();

        if (isNaN(year) || year <= 0) {

            return alert('Year must be a positive number!');

        }

        try {

            const cars = await filterCarsByYear(year);

            setIsSearched(true);

            (async () => { setCars(cars) })();

        } catch (err) {

            alert(err);

        }

    };

    const searchResult = (
        cars.length
            ? cars.map(c => <CarCard key={c._id} car={c} />)
            : <p className="no-cars"> No results.</p>
    );

    return (
        <section id="search-cars">
            <h1>Filter by year</h1>

            <div className="container">
                <form onSubmit={onSearchFormSubmit}>
                    <input id="search-input" type="text" name="search" placeholder="Enter desired production year" />
                    <input type="submit" className="button-list" value="Search" />
                </form>
            </div>

            <h2>Results: </h2>
            <div className="listings">

                {isSearched ? searchResult : ''}

            </div>
        </section>
    );

};

export default Search;