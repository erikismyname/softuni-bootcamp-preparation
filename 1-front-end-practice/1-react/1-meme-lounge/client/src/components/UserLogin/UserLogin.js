import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Notification from '../Notification/Notification.js';

import { useUser } from '../../context/UserContext.js';

import { loginUser } from '../../services/userService.js';

const UserLogin = ({ history }) => {

    const { addUser } = useUser();

    const [error, setError] = useState('');

    useEffect(() => {

        setTimeout(() => setError(''), 3000);

    }, [error]);

    const onFormSubmit = async (ev) => {

        ev.preventDefault();

        const formData = new FormData(ev.target);

        const email = formData.get('email').trim();

        const password = formData.get('password').trim();

        try {

            if (!email || !password) {

                throw new Error('All fields are required!');

            }

            const user = await loginUser({ email, password });

            addUser(user);

            history.push('/all-memes');

        } catch (err) {

            (() => { setError(err.message) })();

        }

    };

    return (
        <section id="login">
            {error ? <Notification error={error} /> : ''}
            <form onSubmit={onFormSubmit} id="login-form">
                <div className="container">
                    <h1>Login</h1>
                    <label htmlFor="email">Email</label>
                    <input id="email" placeholder="Enter Email" name="email" type="text" />
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" placeholder="Enter Password" name="password" />
                    <input type="submit" className="registerbtn button" value="Login" />
                    <div className="container signin">
                        <p>Dont have an account?<Link to="/register">Sign up</Link>.</p>
                    </div>
                </div>
            </form>
        </section>
    );

};

export default UserLogin;