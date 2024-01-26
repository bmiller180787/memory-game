import SetPlayers from "../SetPlayers/SetPlayers";
import SetGrid from "../SetGrid/SetGrid";

const GameSetup = ({setPlayers, players, setGrid}) => {

    return (
        <>
            {players < 1 ? <SetPlayers setPlayers={setPlayers}
                                             players={players}/> :
                <SetGrid/>
            }
        </>
    )
}

export default GameSetup