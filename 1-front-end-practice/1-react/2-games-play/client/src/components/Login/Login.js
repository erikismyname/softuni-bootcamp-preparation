import { Link } from 'react-router-dom';

import useUser from '../../hooks/useUser.js';
import { loginUser } from '../../services/userService.js';
import Input from "../common/forms/Input/Input.js";
import Label from "../common/forms/Label/Label.js";

const Login = ({ history }) => {

    const { addUser } = useUser();

    const onLoginFormSubmit = async (ev) => {

        ev.preventDefault();

        const [email, password] = [...ev.target].slice(0, 2).map(i => i.value).map(v => v.trim());

        if (!email || !password) return alert('All fields are required!');

        try {

            const user = await loginUser({ email, password });

            addUser(user);

            history.push('/');

        } catch (err) {

            alert(err);

        }

    };

    return (

        <section id="login-page" className="auth">
            <form id="login" onSubmit={onLoginFormSubmit}>

                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>

                    <Label for="email" text="Email:" />
                    <Input type="text" id="email" name="email" placeholder="Sokka@gmail.com" />

                    <Label for="login-pass" text="Password:" />
                    <Input type="password" id="login-password" name="password" />

                    <Input type="submit" className="btn submit" value="Login" />

                    <p className="field" >
                        <span>If you don't have profile click <Link to="/register">here</Link></span>
                    </p>
                </div>
            </form>
        </section>

    );

};

export default Login;