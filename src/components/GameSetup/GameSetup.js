import SetPlayers from "../SetPlayers/SetPlayers";
import SetGrid from "../SetGrid/SetGrid";
import './GameSetup.css'

const GameSetup = ({setPlayers, players, setGrid}) => {

    return (
        <>
            {
                players < 1 ? <SetPlayers setPlayers={setPlayers}/> :
                    <SetGrid setGrid={setGrid}/>
            }
        </>
    )
}

export default GameSetup
