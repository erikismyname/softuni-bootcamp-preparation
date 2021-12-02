import InfoSection from "./InfoSection/InfoSection.js";
import CreateComment from "./CreateComment/CreateComment.js";

const Details = ({match}) => {

    return (

        <section id="game-details">
            <h1>Game Details</h1>

            <InfoSection match={match} />

            <CreateComment />

        </section>

    );

};

export default Details;