import Textarea from "../../common/forms/Textarea/Textarea.js";
import Input from "../../common/forms/Input/Input.js";

const CreateComment = ({ match, history, gameId, user, onAddCommentFormSubmit }) => {

    return (

        <article className="create-comment">
            <label>Add new comment:</label>
            <form className="form" onSubmit={onAddCommentFormSubmit}>
                <Textarea name="comment" placeholder="Comment......" />
                <Input className="btn submit" type="submit" value="Add Comment" />
            </form>
        </article>

    );

};

export default CreateComment;