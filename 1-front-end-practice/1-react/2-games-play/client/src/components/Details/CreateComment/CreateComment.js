import Textarea from "../../common/forms/Textarea/Textarea.js";
import Input from "../../common/forms/Input/Input.js";

const CreateComment = () => {

    return (

        <article class="create-comment">
            <label>Add new comment:</label>
            <form class="form">
                <Textarea name="comment" placeholder="Comment......" />
                <Input class="btn submit" type="submit" value="Add Comment" />
            </form>
        </article>

    );

};

export default CreateComment;