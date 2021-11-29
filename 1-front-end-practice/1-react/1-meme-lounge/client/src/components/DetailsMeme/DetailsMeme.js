import { useState, useEffect } from 'react';

import { useUser } from '../../context/UserContext.js';

import { getOneMeme, deleteMeme } from '../../services/memeService.js';

import DetailsMemeBtns from './DetailsMemeBtns/DetailsMemeBtns.js';

const DetailsMeme = ({ history, match }) => {

    const memeId = match.params.memeId;

    const { user } = useUser();

    const [meme, setMeme] = useState([]);

    useEffect(async () => {

        try {

            const meme = await getOneMeme(memeId);

            setMeme(meme);

        } catch (err) {

            alert(err);

        }

    }, []);

    return (
        <section id="meme-details">
            <h1>Meme Title: {meme.title}</h1>
            <div className="meme-details">
                <div className="meme-img">
                    <img alt="meme-alt" src={meme.imageUrl} />
                </div>
                <div className="meme-description">
                    <h2>Meme Description</h2>
                    <p>
                        {meme.description}
                    </p>

                    {
                        meme._ownerId == user._id
                            ?
                            <DetailsMemeBtns
                                token={user.accessToken}
                                memeId={meme._id}
                                deleteMeme={deleteMeme}
                                history={history}
                            />
                            : ''
                    }

                </div>
            </div>
        </section>
    );

};

export default DetailsMeme;