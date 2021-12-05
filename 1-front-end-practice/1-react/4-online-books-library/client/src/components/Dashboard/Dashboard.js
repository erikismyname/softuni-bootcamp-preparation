const Dashboard = () => {

    return (
        <section id="dashboard-page" class="dashboard">
            <h1>Dashboard</h1>
            <ul class="other-books-list">
                <li class="otherBooks">
                    <h3>A Court of Thorns and Roses</h3>
                    <p>Type: Fiction</p>
                    <p class="img"><img src="./images/book1.png" /></p>
                    <a class="button" href="#">Details</a>
                </li>

                <li class="otherBooks">
                    <h3>Outlander</h3>
                    <p>Type: Other</p>
                    <p class="img"><img src="/images/book2.png" /></p>
                    <a class="button" href="#">Details</a>
                </li>

                <li class="otherBooks">
                    <h3>To Kill a Mockingbird</h3>
                    <p>Type: Classic</p>
                    <p class="img"><img src="/images/book3.png" /></p>
                    <a class="button" href="#">Details</a>
                </li>
            </ul>
            <p class="no-books">No books in database!</p>
        </section>
    );

};

export default Dashboard;