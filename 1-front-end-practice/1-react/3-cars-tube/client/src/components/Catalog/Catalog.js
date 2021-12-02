const Catalog = () => {

    return (
        <section id="car-listings">
            <h1>Car Listings</h1>
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

                <div className="listing">
                    <div className="preview">
                        <img src="/images/benz.jpg" alt="" />
                    </div>
                    <h2>Mercedes A-className </h2>
                    <div className="info">
                        <div className="data-info">
                            <h3>Year: 2016</h3>
                            <h3>Price: 27000 $</h3>
                        </div>
                        <div className="data-buttons">
                            <a href="#" className="button-carDetails">Details</a>
                        </div>
                    </div>
                </div>

                <div className="listing">
                    <div className="preview">
                        <img src="/images/bmw.jpg" alt="" />
                    </div>
                    <h2>BMW 3 series</h2>
                    <div className="info">
                        <div className="data-info">
                            <h3>Year: 2016</h3>
                            <h3>Price: 22000 $</h3>
                        </div>
                        <div className="data-buttons">
                            <a href="#" className="button-carDetails">Details</a>
                        </div>
                    </div>
                </div>

                <p className="no-cars">No cars in database.</p>
            </div>
        </section>
    );

};

export default Catalog;