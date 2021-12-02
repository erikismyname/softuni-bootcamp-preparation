import ActionBtns from "./ActionBtns/ActionBtns.js";
import GameHeader from "./GameHeader/GameHeader.js";
import GameCommentsArea from "./GameCommentsArea/GameCommentsArea.js";

const InfoSection = ({gameId, game, comments, user}) => {

    return (

        <div className="info-section">

            <GameHeader game={game} />

            <p className="text">{game.summary}</p>

            <GameCommentsArea comments={comments} />

            {user._id === game._ownerId
                ? <ActionBtns gameId={gameId} user={user} />
                : ''
            }

        </div>

    );

};

export default InfoSection;