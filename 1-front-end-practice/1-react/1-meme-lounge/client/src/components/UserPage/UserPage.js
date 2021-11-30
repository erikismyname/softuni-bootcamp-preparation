import { useState, useEffect } from 'react';

import { useUser } from '../../context/UserContext.js';

import { getMyMemes } from '../../services/memeService.js';

import UserInfo from "./UserInfo/UserInfo.js";
import UserMemes from "./UserMemes/UserMemes.js";

const UserPage = () => {

    const { user } = useUser();

    const [memes, setMemes] = useState([]);

    useEffect(async () => {

        try {

            const memes = await getMyMemes(user._id, user.accessToken);

            setMemes(memes);

        } catch (err) {

            alert(err);

        }

    }, []);


    return (
        <section id="user-profile-page" className="user-profile">
            <UserInfo user={user} memesCount={memes.length} />
            <UserMemes memes={memes} />
        </section>
    );

};

export default UserPage;