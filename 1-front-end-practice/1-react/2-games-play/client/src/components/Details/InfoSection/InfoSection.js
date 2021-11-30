import ActionBtns from "./ActionBtns/ActionBtns.js";
import GameHeader from "./GameHeader/GameHeader.js";
import GameComments from "./GameComments/GameComments.js";

const InfoSection = () => {

    return (

        <div class="info-section">

            <GameHeader />

            <p class="text">
                Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work
                with an Orc to find a weapon everyone is prepared to kill for. Set in a world where fantasy
                creatures live side by side with humans. A human cop is forced
                to work with an Orc to find a weapon everyone is prepared to kill for.
            </p>

            <GameComments />

            <ActionBtns />
            
        </div>

    );

};

export default InfoSection;