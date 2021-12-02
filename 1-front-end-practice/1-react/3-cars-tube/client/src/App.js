function App() {

    return (
        <div id="container">

            <header>
                <nav>
                    <a class="active" href="#">Home</a>
                    <a href="#">All Listings</a>
                    <a href="#">By Year</a>
                    <div id="guest">
                        <a href="#">Login</a>
                        <a href="#">Register</a>
                    </div>
                    <div id="profile">
                        <a>Welcome username</a>
                        <a href="#">My Listings</a>
                        <a href="#">Create Listing</a>
                        <a href="#">Logout</a>
                    </div>
                </nav>
            </header>

            <main id="site-content">


            </main>

            <section id="main">
                <div id="welcome-container">
                    <h1>Welcome To Car Tube</h1>
                    <img class="hero" src="/images/car-png.webp" alt="carIntro" />
                    <h2>To see all the listings click the link below:</h2>
                    <div>
                        <a href="#" class="button">Listings</a>
                    </div>
                </div>
            </section>

            <section id="login">
                <div class="container">
                    <form id="login-form" action="#" method="post">
                        <h1>Login</h1>
                        <p>Please enter your credentials.</p>
                        <hr />

                        <p>Username</p>
                        <input placeholder="Enter Username" name="username" type="text" />

                        <p>Password</p>
                        <input type="password" placeholder="Enter Password" name="password" />
                        <input type="submit" class="registerbtn" value="Login" />
                    </form>
                    <div class="signin">
                        <p>Dont have an account?
                            <a href="#">Sign up</a>.
                        </p>
                    </div>
                </div>
            </section>

            <section id="register">
                <div class="container">
                    <form id="register-form">
                        <h1>Register</h1>
                        <p>Please fill in this form to create an account.</p>
                        <hr />

                        <p>Username</p>
                        <input type="text" placeholder="Enter Username" name="username" required />

                        <p>Password</p>
                        <input type="password" placeholder="Enter Password" name="password" required />

                        <p>Repeat Password</p>
                        <input type="password" placeholder="Repeat Password" name="repeatPass" required />
                        <hr />

                        <input type="submit" class="registerbtn" value="Register" />
                    </form>
                    <div class="signin">
                        <p>Already have an account?
                            <a href="#">Sign in</a>.
                        </p>
                    </div>
                </div>
            </section>

            <section id="car-listings">
                <h1>Car Listings</h1>
                <div class="listings">

                    <div class="listing">
                        <div class="preview">
                            <img src="/images/audia3.jpg" alt="" />
                        </div>
                        <h2>Audi A3</h2>
                        <div class="info">
                            <div class="data-info">
                                <h3>Year: 2018</h3>
                                <h3>Price: 25000 $</h3>
                            </div>
                            <div class="data-buttons">
                                <a href="#" class="button-carDetails">Details</a>
                            </div>
                        </div>
                    </div>

                    <div class="listing">
                        <div class="preview">
                            <img src="/images/benz.jpg" alt="" />
                        </div>
                        <h2>Mercedes A-class </h2>
                        <div class="info">
                            <div class="data-info">
                                <h3>Year: 2016</h3>
                                <h3>Price: 27000 $</h3>
                            </div>
                            <div class="data-buttons">
                                <a href="#" class="button-carDetails">Details</a>
                            </div>
                        </div>
                    </div>

                    <div class="listing">
                        <div class="preview">
                            <img src="/images/bmw.jpg" alt="" />
                        </div>
                        <h2>BMW 3 series</h2>
                        <div class="info">
                            <div class="data-info">
                                <h3>Year: 2016</h3>
                                <h3>Price: 22000 $</h3>
                            </div>
                            <div class="data-buttons">
                                <a href="#" class="button-carDetails">Details</a>
                            </div>
                        </div>
                    </div>

                    <p class="no-cars">No cars in database.</p>
                </div>
            </section>

            <section id="create-listing">
                <div class="container">
                    <form id="create-form">
                        <h1>Create Car Listing</h1>
                        <p>Please fill in this form to create an listing.</p>
                        <hr />

                        <p>Car Brand</p>
                        <input type="text" placeholder="Enter Car Brand" name="brand" />

                        <p>Car Model</p>
                        <input type="text" placeholder="Enter Car Model" name="model" />

                        <p>Description</p>
                        <input type="text" placeholder="Enter Description" name="description" />

                        <p>Car Year</p>
                        <input type="number" placeholder="Enter Car Year" name="year" />

                        <p>Car Image</p>
                        <input type="text" placeholder="Enter Car Image" name="imageUrl" />

                        <p>Car Price</p>
                        <input type="number" placeholder="Enter Car Price" name="price" />

                        <hr />
                        <input type="submit" class="registerbtn" value="Create Listing" />
                    </form>
                </div>
            </section>

            <section id="edit-listing">
                <div class="container">

                    <form id="edit-form">
                        <h1>Edit Car Listing</h1>
                        <p>Please fill in this form to edit an listing.</p>
                        <hr />

                        <p>Car Brand</p>
                        <input type="text" placeholder="Enter Car Brand" name="brand" defaultValue="" />

                        <p>Car Model</p>
                        <input type="text" placeholder="Enter Car Model" name="model" defaultValue="" />

                        <p>Description</p>
                        <input type="text" placeholder="Enter Description" name="description" defaultValue="" />

                        <p>Car Year</p>
                        <input type="number" placeholder="Enter Car Year" name="year" defaultValue="" />

                        <p>Car Image</p>
                        <input type="text" placeholder="Enter Car Image" name="imageUrl" defaultValue="" />

                        <p>Car Price</p>
                        <input type="number" placeholder="Enter Car Price" name="price" defaultValue="" />

                        <hr />
                        <input type="submit" class="registerbtn" value="Edit Listing" />
                    </form>
                </div>
            </section>

            <section id="listing-details">
                <h1>Details</h1>
                <div class="details-info">
                    <img src="/images/audia3.jpg" alt="" />
                    <hr />
                    <ul class="listing-props">
                        <li><span>Brand: </span>Audi</li>
                        <li><span>Model: </span>A3</li>
                        <li><span>Year: </span>2018</li>
                        <li><span>Price: </span>25000$</li>
                    </ul>

                    <p class="description-para">Some description of this car.Lorem ipsum dolor sit amet consectetur
                        adipisicing elit.Sunt voluptate quam nesciunt ipsa veritatis voluptas optio debitis repellat porro
                        sapiente.</p>

                    <div class="listings-buttons">
                        <a href="#" class="button-list">Edit</a>
                        <a href="#" class="button-list">Delete</a>
                    </div>
                </div>
            </section>

            <section id="my-listings">
                <h1>My car listings</h1>
                <div class="listings">

                    <div class="listing">
                        <div class="preview">
                            <img src="/images/audia3.jpg" alt="" />
                        </div>
                        <h2>Audi A3</h2>
                        <div class="info">
                            <div class="data-info">
                                <h3>Year: 2018</h3>
                                <h3>Price: 25000 $</h3>
                            </div>
                            <div class="data-buttons">
                                <a href="#" class="button-carDetails">Details</a>
                            </div>
                        </div>
                    </div>

                    <p class="no-cars"> You haven't listed any cars yet.</p>
                </div>
            </section>

            <section id="search-cars">
                <h1>Filter by year</h1>

                <div class="container">
                    <input id="search-input" type="text" name="search" placeholder="Enter desired production year" />
                    <button class="button-list">Search</button>
                </div>

                <h2>Results: </h2>
                <div class="listings">

                    <div class="listing">
                        <div class="preview">
                            <img src="/images/audia3.jpg" alt="" />
                        </div>
                        <h2>Audi A3</h2>
                        <div class="info">
                            <div class="data-info">
                                <h3>Year: 2018</h3>
                                <h3>Price: 25000 $</h3>
                            </div>
                            <div class="data-buttons">
                                <a href="#" class="button-carDetails">Details</a>
                            </div>
                        </div>
                    </div>

                    <p class="no-cars"> No results.</p>
                </div>
            </section>

            <footer>
                <p>&copy; All rights reserved</p>
            </footer>
        </div>
    );

}

export default App;