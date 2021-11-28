import { useState, useEffect } from 'react';

import { getAllMemes } from '../../services/memeService.js';

import AllMemesCard from "./AllMemesCard/AllMemesCard.js";

const AllMemes = () => {

    const [memes, setMemes] = useState([]);

    useEffect(async () => {

        try {

            const memes = await getAllMemes();

            setMemes(memes);

        } catch (err) {

            alert(err);

        }

    }, []);

    return (
        <section id="meme-feed">
            <h1>All Memes</h1>
            <div id="memes">

                {memes.length
                    ? memes.map(m => <AllMemesCard key={m._id} meme={m} />)
                    : <p className="no-memes">No memes in database.</p>
                }

            </div>
        </section>
    );

};

export default AllMemes;