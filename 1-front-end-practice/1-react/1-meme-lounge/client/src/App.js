function App() {

    return (
        <div id="container">

            <section id="notifications">
                <div id="errorBox" class="notification">
                    <span>MESSAGE</span>
                </div>
            </section>

            <nav>
                <a href="#">All Memes</a>
                <div class="user">
                    <a href="#">Create Meme</a>
                    <div class="profile">
                        <span>Welcome, {email}</span>
                        <a href="#">My Profile</a>
                        <a href="#">Logout</a>
                    </div>
                </div>
                <div class="guest">
                    <div class="profile">
                        <a href="#">Login</a>
                        <a href="#">Register</a>
                    </div>
                    <a class="active" href="#">Home Page</a>
                </div>
            </nav>

            <main>
            </main>

            <section id="welcome">
                <div id="welcome-container">
                    <h1>Welcome To Meme Lounge</h1>
                    <img src="/images/welcome-meme.jpg" alt="meme" />
                    <h2>Login to see our memes right away!</h2>
                    <div id="button-div">
                        <a href="#" class="button">Login</a>
                        <a href="#" class="button">Register</a>
                    </div>
                </div>
            </section>

            <section id="login">
                <form id="login-form">
                    <div class="container">
                        <h1>Login</h1>
                        <label htmlFor="email">Email</label>
                        <input id="email" placeholder="Enter Email" name="email" type="text" />
                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" placeholder="Enter Password" name="password" />
                        <input type="submit" class="registerbtn button" value="Login" />
                        <div class="container signin">
                            <p>Dont have an account?<a href="#">Sign up</a>.</p>
                        </div>
                    </div>
                </form>
            </section>

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

            <section id="meme-feed">
                <h1>All Memes</h1>
                <div id="memes">
                    <div class="meme">
                        <div class="card">
                            <div class="info">
                                <p class="meme-title">Debugging</p>
                                <img class="meme-image" alt="meme-img" src="/images/2.png" />
                            </div>
                            <div id="data-buttons">
                                <a class="button" href="#">Details</a>
                            </div>
                        </div>
                    </div>
                    <div class="meme">
                        <div class="card">
                            <div class="info">
                                <p class="meme-title">Java Script</p>
                                <img class="meme-image" alt="meme-img" src="/images/4.png" />
                            </div>
                            <div id="data-buttons">
                                <a class="button" href="#">Details</a>
                            </div>
                        </div>
                    </div>
                    <div class="meme">
                        <div class="card">
                            <div class="info">
                                <p class="meme-title">Yes, arrays are objects</p>
                                <img class="meme-image" alt="meme-img" src="/images/6.png" />
                            </div>
                            <div id="data-buttons">
                                <a class="button" href="#">Details</a>
                            </div>
                        </div>
                    </div>
                    <div class="meme">
                        <div class="card">
                            <div class="info">
                                <p class="meme-title">Java Script joke</p>
                                <img class="meme-image" alt="meme-img" src="/images/1.png" />
                            </div>
                            <div id="data-buttons">
                                <a class="button" href="#">Details</a>
                            </div>
                        </div>
                    </div>
                    <div class="meme">
                        <div class="card">
                            <div class="info">
                                <p class="meme-title">Bad code can present some problems</p>
                                <img class="meme-image" alt="meme-img" src="/images/3.png" />
                            </div>
                            <div id="data-buttons">
                                <a class="button" href="#">Details</a>
                            </div>
                        </div>
                    </div>
                    <p class="no-memes">No memes in database.</p>
                </div>
            </section>

            <section id="create-meme">
                <form id="create-form">
                    <div class="container">
                        <h1>Create Meme</h1>
                        <label htmlFor="title">Title</label>
                        <input id="title" type="text" placeholder="Enter Title" name="title" />
                        <label htmlFor="description">Description</label>
                        <textarea id="description" placeholder="Enter Description" name="description"></textarea>
                        <label htmlFor="imageUrl">Meme Image</label>
                        <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl" />
                        <input type="submit" class="registerbtn button" value="Create Meme" />
                    </div>
                </form>
            </section>

            <section id="edit-meme">
                <form id="edit-form">
                    <h1>Edit Meme</h1>
                    <div class="container">
                        <label htmlFor="title">Title</label>
                        <input id="title" type="text" placeholder="Enter Title" name="title" />
                        <label htmlFor="description">Description</label>
                        <textarea id="description" placeholder="Enter Description" name="description">
                            Programming is often touted as a smart and lucrative career path.
                            It's a job that (sometimes) offers flexibility and great benefits.
                            But it's far from sunshine and Nyan Cat rainbows. The hours are long.
                            The mistakes are frustrating. And your eyesight is almost guaranteed to suffer.
                            These memes cover most of the frustration (and funny moments) of programming.
                            At least we can laugh through the pain.
                        </textarea>
                        <label htmlFor="imageUrl">Image Url</label>
                        <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" />
                        <input type="submit" class="registerbtn button" value="Edit Meme" />
                    </div>
                </form>
            </section>

            <section id="meme-details">
                <h1>Meme Title: Bad code can present some problems

                </h1>
                <div class="meme-details">
                    <div class="meme-img">
                        <img alt="meme-alt" src="/images/3.png" />
                    </div>
                    <div class="meme-description">
                        <h2>Meme Description</h2>
                        <p>
                            Being a programmer is a fun job. And many funny incidents occur throughout a
                            programmer’s career.
                            Here are a few jokes that can be relatable to you as a programmer.
                        </p>

                        <a class="button warning" href="#">Edit</a>
                        <button class="button danger">Delete</button>

                    </div>
                </div>
            </section>

            <section id="user-profile-page" class="user-profile">
                <article class="user-info">
                    <img id="user-avatar-url" alt="user-profile" src="/images/female.png" />
                    <div class="user-content">
                        <p>Username: Mary</p>
                        <p>Email: mary @abv.bg</p>
                        <p>My memes count: 2</p>
                    </div>
                </article>
                <h1 id="user-listings-title">User Memes</h1>
                <div class="user-meme-listings">
                    <div class="user-meme">
                        <p class="user-meme-title">Java Script joke</p>
                        <img class="userProfileImage" alt="meme-img" src="/images/1.png" />
                        <a class="button" href="#">Details</a>
                    </div>
                    <div class="user-meme">
                        <p class="user-meme-title">Bad code can present some problems</p>
                        <img class="userProfileImage" alt="meme-img" src="/images/3.png" />
                        <a class="button" href="#">Details</a>
                    </div>

                    <p class="no-memes">No memes in database.</p>
                </div>
            </section>

            <footer class="footer">
                <p>Created by SoftUni Delivery Team</p>
            </footer>
        </div>
    );

}

export default App;