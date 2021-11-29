import { Link } from 'react-router-dom';

import { useUser } from '../../context/UserContext.js';

import { loginUser } from '../../services/userService.js';

const UserLogin = ({ history }) => {

    const { addUser } = useUser();

    const onFormSubmit = async (ev) => {

        ev.preventDefault();

        const formData = new FormData(ev.target);

        const email = formData.get('email').trim();

        const password = formData.get('password').trim();

        if (!email || !password) return alert('Both fields are required!');

        try {

            const user = await loginUser({ email, password });

            addUser(user);

            history.push('/all-memes');

        } catch (err) {

            alert(err);

        }

    };

    return (
        <section id="login">
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