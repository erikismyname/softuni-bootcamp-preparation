import Label from "../common/forms/Label/Label.js";
import Input from "../common/forms/Input/Input.js";
import Textarea from "../common/forms/Textarea/Textarea.js";

const Edit = () => {

    return (

        <section id="edit-page" className="auth">
            <form id="edit">
                <div className="container">
                    <h1>Edit Game</h1>

                    <Label htmlFor="leg-title" text="Legendary title:" />
                    <Input type="text" id="title" name="title" defaultValue="" />

                    <Label htmlFor="category" text="Category:" />
                    <Input type="text" id="category" name="category" defaultValue="" />

                    <Label htmlFor="levels" text="MaxLevel:" />
                    <Input type="number" id="maxLevel" name="maxLevel" min="1" defaultValue="" />

                    <Label htmlFor="game-img" text="Image:" />
                    <Input type="text" id="imageUrl" name="imageUrl" defaultValue="" />

                    <Label htmlFor="summary" text="Summary:" />
                    <Textarea name="summary" id="summary" />

                    <Input className="btn submit" type="submit" value="Edit Game" />

                </div>
            </form>
        </section>

    );

};

export default Edit;