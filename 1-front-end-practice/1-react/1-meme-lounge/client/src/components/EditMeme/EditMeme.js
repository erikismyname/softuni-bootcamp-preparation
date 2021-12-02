import { useState, useEffect } from 'react';

import Notification from '../Notification/Notification.js';

import { useUser } from '../../context/UserContext.js';

import { getOneMeme, editMeme } from '../../services/memeService.js';

const EditMeme = ({ history, match }) => {

    const memeId = match.params.memeId;

    const { user } = useUser();

    const [meme, setMeme] = useState([]);

    const [error, setError] = useState('');

    useEffect(async () => {

        try {

            const meme = await getOneMeme(memeId);

            setMeme(meme);

        } catch (err) {

            alert(err);

        }

    }, []);

    useEffect(() => {

        setTimeout(() => setError(''), 3000);

    }, [error]);

    const onFormSubmit = async (ev) => {

        ev.preventDefault();

        const formData = new FormData(ev.target);

        const title = formData.get('title').trim();

        const description = formData.get('description').trim();

        const imageUrl = formData.get('imageUrl').trim();

        try {

            if (!title || !description || !imageUrl) {

                throw new Error('All fields are required!');

            }

            await editMeme(memeId, { title, description, imageUrl }, user.accessToken);

            history.push(`/details/${memeId}`);

        } catch (err) {

            (() => { setError(err.message) })();

        }

    }

    return (
        <section id="edit-meme">
            {error ? <Notification error={error} /> : ''}
            <form id="edit-form" onSubmit={onFormSubmit}>
                <h1>Edit Meme</h1>
                <div className="container">
                    <label htmlFor="title">Title</label>
                    <input id="title" type="text" placeholder="Enter Title" name="title" defaultValue={meme.title} />
                    <label htmlFor="description">Description</label>
                    <textarea id="description" placeholder="Enter Description" name="description" defaultValue={meme.description}></textarea>
                    <label htmlFor="imageUrl">Image Url</label>
                    <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" defaultValue={meme.imageUrl} />
                    <input type="submit" className="registerbtn button" value="Edit Meme" />
                </div>
            </form>
        </section>
    );

};

export default EditMeme;