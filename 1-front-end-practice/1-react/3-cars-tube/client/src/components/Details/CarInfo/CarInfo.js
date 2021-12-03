const CarInfo = ({car}) => {

    return (
        <>
            <img src={car.imageUrl} alt="" />
            <hr />
            <ul className="listing-props">
                <li><span>Brand: </span>{car.brand}</li>
                <li><span>Model: </span>{car.model}</li>
                <li><span>Year: </span>{car.year}</li>
                <li><span>Price: </span>{car.price}$</li>
            </ul>
            <p className="description-para">{car.description}</p>
        </>
    );

};

export default CarInfo;