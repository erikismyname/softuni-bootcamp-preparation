import useUser from '../../hooks/useUser.js';
import { registerUser } from '.././../services/userService.js';

const Register = ({ history }) => {

    const { addUser } = useUser();

    const onRegisterFormSubmit = async (ev) => {

        ev.preventDefault();

        const formData = new FormData(ev.target);

        const email = formData.get('email').trim();

        const password = formData.get('password').trim();

        const rePass = formData.get('confirm-pass').trim();

        if (!email || !password || !rePass) {

            return alert('All fields are required!');

        } else if (password != rePass) {

            return alert('Passwords must match!');

        }

        try {

            const user = await registerUser({ email, password });

            addUser(user);

            history.push('/dashboard');

        } catch (err) {

            alert(err);

        }

    };

    return (
        <section id="register-page" class="register">
            <form id="register-form" onSubmit={onRegisterFormSubmit}>
                <fieldset>
                    <legend>Register Form</legend>
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
                    <p className="field">
                        <label htmlFor="repeat-pass">Repeat Password</label>
                        <span className="input">
                            <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password" />
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Register" />
                </fieldset>
            </form>
        </section>
    );

};

export default Register;