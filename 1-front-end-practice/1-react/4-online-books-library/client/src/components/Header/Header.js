const Header = () => {

    return (
        <header id="site-header">
            <nav class="navbar">
                <section class="navbar-dashboard">
                    <a href="#">Dashboard</a>
                    <div id="guest">
                        <a class="button" href="#">Login</a>
                        <a class="button" href="#">Register</a>
                    </div>
                    <div id="user">
                        <span>Welcome, email</span>
                        <a class="button" href="#">My Books</a>
                        <a class="button" href="#">Add Book</a>
                        <a class="button" href="#">Logout</a>
                    </div>
                </section>
            </nav>
        </header>
    );

};

export default Header;