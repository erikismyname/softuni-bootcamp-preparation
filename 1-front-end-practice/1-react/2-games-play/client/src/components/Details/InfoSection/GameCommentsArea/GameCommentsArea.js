import GameComment from "./GameComment/GameComment.js";

const GameCommentsArea = ({ comments }) => {

    return (

        <div className="details-comments">
            <h2>Comments:</h2>

            {comments.length
                ?
                <ul>
                    {comments.map(c => <GameComment key={c._id} comment={c.comment} />)}
                </ul>
                :
                <p className="no-comment">No comments.</p>
            }

        </div>

    );

};

export default GameCommentsArea;