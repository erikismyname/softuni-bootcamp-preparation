import Input from "../common/forms/Input/Input.js";
import Label from "../common/forms/Label/Label.js";

const Register = () => {

    return (

        <section id="register-page" className="content auth">
            <form id="register">
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>

                    <Label htmlFor="email" text="Email:" />
                    <Input type="email" id="email" name="email" placeholder="maria@email.com" />

                    <Label htmlFor="pass" text="Password:" />
                    <Input type="password" name="password" id="register-password" />

                    <Label htmlFor="con-pass" text="Confirm Password:" />
                    <Input type="password" name="confirm-password" id="confirm-password" />

                    <Input className="btn submit" type="submit" value="Register" />

                    <p className="field">
                        <span>If you already have profile click <a href="#">here</a></span>
                    </p>
                </div>
            </form>
        </section>

    );

};

export default Register;