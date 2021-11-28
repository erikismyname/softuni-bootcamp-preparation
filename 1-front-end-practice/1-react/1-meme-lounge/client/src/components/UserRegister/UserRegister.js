const UserRegister = () => {

    return (
        <section id="register">
            <form id="register-form">
                <div class="container">
                    <h1>Register</h1>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" placeholder="Enter Username" name="username" />
                    <label htmlFor="email">Email</label>
                    <input id="email" type="text" placeholder="Enter Email" name="email" />
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" placeholder="Enter Password" name="password" />
                    <label htmlFor="repeatPass">Repeat Password</label>
                    <input id="repeatPass" type="password" placeholder="Repeat Password" name="repeatPass" />
                    <div class="gender">
                        <input type="radio" name="gender" id="female" value="female" />
                        <label htmlFor="female">Female</label>
                        <input type="radio" name="gender" id="male" value="male" checked />
                        <label htmlFor="male">Male</label>
                    </div>
                    <input type="submit" class="registerbtn button" value="Register" />
                    <div class="container signin">
                        <p>Already have an account?<a href="#">Sign in</a>.</p>
                    </div>
                </div>
            </form>
        </section>
    );

};

export default UserRegister;