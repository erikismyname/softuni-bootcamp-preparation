import { useState, useEffect } from 'react';

import useUser from '../../../hooks/useUser.js';
import { getOneGame } from '../../../services/gameService.js';
import { getAllComments } from '../../../services/commentService.js';
import ActionBtns from "./ActionBtns/ActionBtns.js";
import GameHeader from "./GameHeader/GameHeader.js";
import GameCommentsArea from "./GameCommentsArea/GameCommentsArea.js";

const InfoSection = ({ match }) => {

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

    return (

        <div className="info-section">

            <GameHeader game={game} />

            <p className="text">{game.summary}</p>

            <GameCommentsArea comments={comments} />

            {user._id == game._ownerId
                ? <ActionBtns gameId={gameId} />
                : ''
            }

        </div>

    );

};

export default InfoSection;