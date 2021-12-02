const Profile = () => {

    return (
        <section id="my-listings">
            <h1>My car listings</h1>
            <div className="listings">

                <div className="listing">
                    <div className="preview">
                        <img src="/images/audia3.jpg" alt="" />
                    </div>
                    <h2>Audi A3</h2>
                    <div className="info">
                        <div className="data-info">
                            <h3>Year: 2018</h3>
                            <h3>Price: 25000 $</h3>
                        </div>
                        <div className="data-buttons">
                            <a href="#" className="button-carDetails">Details</a>
                        </div>
                    </div>
                </div>

                <p className="no-cars"> You haven't listed any cars yet.</p>
            </div>
        </section>
    );

};

export default Profile;