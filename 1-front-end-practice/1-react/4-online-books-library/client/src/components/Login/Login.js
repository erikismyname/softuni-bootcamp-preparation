import useUser from '../../hooks/useUser.js';
import { loginUser } from '../../services/userService.js';

const Login = ({ history }) => {

    const { addUser } = useUser();

    const onLoginFormSubmit = async (ev) => {

        ev.preventDefault();

        const formData = new FormData(ev.target);

        const email = formData.get('email').trim();

        const password = formData.get('password').trim();

        if (!email || !password) return alert('All fields are required!');

        try {

            const user = await loginUser({ email, password });

            addUser(user);

            history.push('/dashboard');

        } catch (err) {

            alert(err);

        }

    };

    return (
        <section id="login-page" className="login">
            <form id="login-form" onSubmit={onLoginFormSubmit}>
                <fieldset>
                    <legend>Login Form</legend>
                    <p className="field">
                        <label htmlFor="email">Email</label>
                        <span className="input">
                            <input type="text" name="email" id="email" placeholder="Email" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="password">Password</label>
                        <span className="input">
                            <input type="password" name="password" id="password" placeholder="Password" />
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Login" />
                </fieldset>
            </form>
        </section>
    );

};

export default Login;