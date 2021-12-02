import { useState, useEffect } from 'react';

import useUser from '../../hooks/useUser.js';
import { getOneGame, editGame } from '../../services/gameService.js';
import Label from "../common/forms/Label/Label.js";
import Input from "../common/forms/Input/Input.js";
import Textarea from "../common/forms/Textarea/Textarea.js";

const Edit = ({ match, history }) => {

    const gameId = match.params.gameId;

    const { user } = useUser();

    const [game, setGame] = useState({});

    useEffect(() => {

        getOneGame(gameId)
            .then(game => setGame(game))
            .catch(err => alert(err));

    }, []);

    const onEditFormSubmit = async (ev) => {

        ev.preventDefault();

        const [title, category, maxLevel, imageUrl, summary] = [...ev.target].slice(0, 5).map(i => i.value).map(v => v.trim());

        if (!title || !category || !maxLevel || !imageUrl || !summary) {

            return alert('All fields are required!');

        }

        try {

            await editGame(gameId, user.accessToken, { title, category, maxLevel, imageUrl, summary });

            history.push(`/details/${gameId}`)

        } catch (err) {

            alert(err);

        }

    };

    return (

        <section id="edit-page" className="auth">
            <form id="edit" onSubmit={onEditFormSubmit}>
                <div className="container">
                    <h1>Edit Game</h1>

                    <Label htmlFor="leg-title" text="Legendary title:" />
                    <Input type="text" id="title" name="title" defaultValue={game.title} />

                    <Label htmlFor="category" text="Category:" />
                    <Input type="text" id="category" name="category" defaultValue={game.category} />

                    <Label htmlFor="levels" text="MaxLevel:" />
                    <Input type="number" id="maxLevel" name="maxLevel" min="1" defaultValue={game.maxLevel} />

                    <Label htmlFor="game-img" text="Image:" />
                    <Input type="text" id="imageUrl" name="imageUrl" defaultValue={game.imageUrl} />

                    <Label htmlFor="summary" text="Summary:" />
                    <Textarea name="summary" id="summary" defaultValue={game.summary} />

                    <input className="btn submit" type="submit" value="Edit Game" />

                </div>
            </form>
        </section>

    );

};

export default Edit;