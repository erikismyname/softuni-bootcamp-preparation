import { Link } from "react-router-dom";

import useUser from "../../hooks/useUser.js";
import { registerUser } from '../../services/userService.js';
import Input from "../common/forms/Input/Input.js";
import Label from "../common/forms/Label/Label.js";

const Register = ({ history }) => {

    const { addUser } = useUser();

    const onRegisterFormSubmit = async (ev) => {

        ev.preventDefault();

        const [email, password, rePass] = [...ev.target].slice(0, 3).map(i => i.value).map(v => v.trim());

        if (!email || !password || !rePass) {

            return alert('All fields are required!');

        } else if (password !== rePass) {

            return alert('Passwords must match!');

        }

        try {

            const user = await registerUser({ email, password });

            addUser(user);

            history.push('/');

        } catch (err) {

            alert(err);

        }

    };

    return (

        <section id="register-page" className="content auth">
            <form id="register" onSubmit={onRegisterFormSubmit}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>

                    <Label htmlFor="email" text="Email:" />
                    <Input type="text" id="email" name="email" placeholder="maria@email.com" />

                    <Label htmlFor="pass" text="Password:" />
                    <Input type="password" name="password" id="register-password" />

                    <Label htmlFor="con-pass" text="Confirm Password:" />
                    <Input type="password" name="confirm-password" id="confirm-password" />

                    <Input className="btn submit" type="submit" value="Register" />

                    <p className="field">
                        <span>If you already have profile click <Link to="/login">here</Link></span>
                    </p>
                </div>
            </form>
        </section>

    );

};

export default Register;