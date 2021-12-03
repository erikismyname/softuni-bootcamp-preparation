import { Link } from "react-router-dom";

import useUser from '../../hooks/useUser.js';

import { loginUser } from '../../services/userService.js';

const Login = ({ history }) => {

    const { addUser } = useUser();

    const onLoginFormSubmit = async (ev) => {

        ev.preventDefault();

        const formData = new FormData(ev.target);

        const username = formData.get('username').trim();

        const password = formData.get('password').trim();

        if (!username || !password) return alert('All fields are required!');

        try {

            const user = await loginUser({ username, password });

            addUser(user);

            history.push('/catalog');

        } catch (err) {

            alert(err);

        }

    };

    return (
        <section id="login">
            <div className="container">
                <form id="login-form" onSubmit={onLoginFormSubmit}>
                    <h1>Login</h1>
                    <p>Please enter your credentials.</p>
                    <hr />

                    <p>Username</p>
                    <input placeholder="Enter Username" name="username" type="text" />

                    <p>Password</p>
                    <input type="password" placeholder="Enter Password" name="password" />
                    <input type="submit" className="registerbtn" value="Login" />
                </form>
                <div className="signin">
                    <p>Dont have an account?
                        <Link to="/register">Sign up</Link>.
                    </p>
                </div>
            </div>
        </section>
    );

};

export default Login;