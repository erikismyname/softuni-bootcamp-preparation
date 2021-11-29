import { Link } from 'react-router-dom';

import { useUser } from '../../context/UserContext.js';

import { registerUser } from '../../services/userService.js';

const UserRegister = ({ history }) => {

    const { addUser } = useUser();

    const onFormSubmit = async (ev) => {

        ev.preventDefault();

        const formData = new FormData(ev.target);

        const username = formData.get('username').trim();

        const email = formData.get('email').trim();

        const password = formData.get('password').trim();

        const rePass = formData.get('repeatPass').trim();

        const gender = formData.get('gender');

        if (!username || !email || !password || !rePass || !gender) {

            return alert('All fields are required!');

        } else if (password != rePass) {

            return alert('Password must match!');

        }

        try {

            const user = await registerUser({ username, email, password, gender });

            addUser(user);

            history.push('/all-memes');

        } catch (err) {

            alert(err);

        }

    };

    return (
        <section id="register">
            <form onSubmit={onFormSubmit} id="register-form">
                <div className="container">
                    <h1>Register</h1>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" placeholder="Enter Username" name="username" />
                    <label htmlFor="email">Email</label>
                    <input id="email" type="text" placeholder="Enter Email" name="email" />
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" placeholder="Enter Password" name="password" />
                    <label htmlFor="repeatPass">Repeat Password</label>
                    <input id="repeatPass" type="password" placeholder="Repeat Password" name="repeatPass" />
                    <div className="gender">
                        <input type="radio" name="gender" id="female" value="female" />
                        <label htmlFor="female">Female</label>
                        <input type="radio" name="gender" id="male" value="male" />
                        <label htmlFor="male">Male</label>
                    </div>
                    <input type="submit" className="registerbtn button" value="Register" />
                    <div className="container signin">
                        <p>Already have an account?<Link to="/login">Sign in</Link>.</p>
                    </div>
                </div>
            </form>
        </section>
    );

};

export default UserRegister;