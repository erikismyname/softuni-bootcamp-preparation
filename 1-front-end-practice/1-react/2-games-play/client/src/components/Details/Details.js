import { useState, useEffect } from 'react';

import useUser from '../../hooks/useUser.js';
import { getOneGame } from '../../services/gameService.js';
import { getAllComments, postComment } from '../../services/commentService.js';
import InfoSection from "./InfoSection/InfoSection.js";
import CreateComment from "./CreateComment/CreateComment.js";

const Details = ({ match, history }) => {

    const gameId = match.params.gameId;

    const { user } = useUser();

    const [game, setGame] = useState([]);

    const [comments, setComments] = useState([]);

    useEffect(() => {

        getOneGame(gameId)
            .then(game => setGame(game))
            .catch(err => alert(err));

        getAllComments(gameId)
            .then(comments => setComments(comments))
            .catch(err => alert(err));

    }, []);

    const onAddCommentFormSubmit = async (ev) => {

        ev.preventDefault();

        const comment = ev.target.comment.value.trim();

        if (!comment) return alert('You cannot create an empty comment!');

        postComment({ gameId, comment }, user.accessToken)
            .then(comment => setComments((oldComments) => [...oldComments, comment]))
            .catch(err => alert(err));

        ev.target.comment.value = '';

    };

    return (

        <section id="game-details">
            <h1>Game Details</h1>

            <InfoSection
                gameId={gameId}
                game={game}
                comments={comments}
                user={user}
            />

            {user?.email && user._id !== game._ownerId
                ? <CreateComment
                    match={match}
                    history={history}
                    gameId={gameId}
                    user={user}
                    onAddCommentFormSubmit={onAddCommentFormSubmit}
                />
                : ''
            }

        </section>

    );

};

export default Details;