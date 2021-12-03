import { Link } from "react-router-dom";

import useUser from '../../hooks/useUser.js';

import { registerUser } from '../../services/userService.js';

const Register = ({ history }) => {

    const { addUser } = useUser();

    const onRegisterFormSubmit = async (ev) => {

        ev.preventDefault();

        const formData = new FormData(ev.target);

        const username = formData.get('username').trim();

        const password = formData.get('password').trim();

        const rePass = formData.get('repeatPass').trim();

        if (!username || !password || !rePass) {

            return alert('All fields are required!');

        } else if (password !== rePass) {

            return alert('Passwords must match!');

        }

        try {

            const user = await registerUser({ username, password });

            addUser(user);

            history.push('/catalog');

        } catch (err) {

            alert(err);

        }

    };

    return (
        <section id="register">
            <div className="container">
                <form id="register-form" onSubmit={onRegisterFormSubmit}>
                    <h1>Register</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr />

                    <p>Username</p>
                    <input type="text" placeholder="Enter Username" name="username" />

                    <p>Password</p>
                    <input type="password" placeholder="Enter Password" name="password" />

                    <p>Repeat Password</p>
                    <input type="password" placeholder="Repeat Password" name="repeatPass" />
                    <hr />

                    <input type="submit" className="registerbtn" value="Register" />
                </form>
                <div className="signin">
                    <p>Already have an account?
                        <Link to="/login">Sign in</Link>.
                    </p>
                </div>
            </div>
        </section>
    );

};

export default Register;