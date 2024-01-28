import SetPlayers from "../SetPlayers/SetPlayers";
import SetGrid from "../SetGrid/SetGrid";
import './GameSetup.css'

const GameSetup = ({setPlayers, players, setGrid, setIsGameSet, grid}) => {

    if (grid > 1 && players > 0) {
        setIsGameSet(true)
    }

    return (
        <>
            {
                players < 1 ? <SetPlayers setPlayers={setPlayers} players={players}/> :
                    <SetGrid setGrid={setGrid} setIsGameSet={setIsGameSet} grid={grid}/>
            }
        </>
    )
}

export default GameSetup