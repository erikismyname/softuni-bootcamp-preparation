import Input from "../common/forms/Input/Input.js";
import Label from "../common/forms/Label/Label.js";

const Login = () => {

    return (

        <section id="login-page" class="auth">
            <form id="login">

                <div class="container">
                    <div class="brand-logo"></div>
                    <h1>Login</h1>

                    <Label for="email" text="Email:" />
                    <Input type="email" id="email" name="email" placeholder="Sokka@gmail.com" />

                    <Label for="login-pass" text="Password:" />
                    <Input type="password" id="login-password" name="password" />

                    <Input type="submit" class="btn submit" value="Login" />

                    <p class="field" >
                        <span>If you don't have profile click <a href="#">here</a></span>
                    </p>
                </div>
            </form>
        </section>

    );

};

export default Login;