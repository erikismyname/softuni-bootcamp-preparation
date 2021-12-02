import useUser from '../../hooks/useUser.js';
import { createGame } from '../../services/gameService.js';
import Label from '../common/forms/Label/Label.js';
import Input from '../common/forms/Input/Input.js';
import Textarea from '../common/forms/Textarea/Textarea.js';

const Create = ({ history }) => {

    const { user } = useUser();

    const onCreateFormSubmit = async (ev) => {

        ev.preventDefault();

        const [title, category, maxLevel, imageUrl, summary] = [...ev.target].slice(0, 5).map(i => i.value).map(v => v.trim());

        if (!title || !category || !maxLevel || !imageUrl || !summary) {

            return alert('All fiends are required!');

        }

        try {

            await createGame(user.accessToken, { title, category, maxLevel, imageUrl, summary });

            history.push('/');

        } catch (err) {

            alert(err);

        }

    };

    return (

        <section id="create-page" className="auth">
            <form id="create" onSubmit={onCreateFormSubmit}>
                <div className="container">
                    <h1>Create Game</h1>

                    <Label htmlFor="leg-title" text="Legendary title:" />
                    <Input type="text" id="title" name="title" placeholder="Enter game title..." />

                    <Label htmlFor="category" text="Category:" />
                    <Input type="text" id="category" name="category" placeholder="Enter game category..." />

                    <Label htmlFor="levels" text="MaxLevel:" />
                    <Input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1" />

                    <Label htmlFor="game-img" text="Image:" />
                    <Input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                    <Label htmlFor="summary" text="Summary:" />
                    <Textarea name="summary" id="summary" />

                    <input className="btn submit" type="submit" value="Create Game" />

                </div>
            </form>
        </section>

    );

};

export default Create;