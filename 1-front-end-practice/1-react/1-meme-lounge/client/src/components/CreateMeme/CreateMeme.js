import { useState, useEffect } from 'react';

import Notification from '../Notification/Notification.js';

import { useUser } from '../../context/UserContext.js';

import { createMeme } from '../../services/memeService.js';

const CreateMeme = ({ history }) => {

    const { user } = useUser();

    const [error, setError] = useState('');

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

            await createMeme({ title, description, imageUrl }, user.accessToken);

            history.push('/all-memes');

        } catch (err) {

            (() => { setError(err.message) })();

        }

    };

    return (
        <section id="create-meme">
            {error ? <Notification error={error} /> : ''}
            <form id="create-form" onSubmit={onFormSubmit}>
                <div className="container">
                    <h1>Create Meme</h1>
                    <label htmlFor="title">Title</label>
                    <input id="title" type="text" placeholder="Enter Title" name="title" />
                    <label htmlFor="description">Description</label>
                    <textarea id="description" placeholder="Enter Description" name="description"></textarea>
                    <label htmlFor="imageUrl">Meme Image</label>
                    <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl" />
                    <input type="submit" className="registerbtn button" value="Create Meme" />
                </div>
            </form>
        </section>
    );

};

export default CreateMeme;