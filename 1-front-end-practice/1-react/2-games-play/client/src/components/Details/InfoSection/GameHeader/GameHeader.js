const GameHeader = ({game}) => {

    return (

        <div className="game-header">
            <img className="game-img" alt="" src={game.imageUrl}/>
            <h1>{game.title}</h1>
            <span className="levels">MaxLevel: {game.maxLevel}</span>
            <p className="type">{game.category}</p>
        </div>

    );

};

export default GameHeader;