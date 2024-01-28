import SetPlayers from "../SetPlayers/SetPlayers";
import SetGrid from "../SetGrid/SetGrid";

const GameSetup = ({setPlayers, players, setGrid, setIsGameSet, grid}) => {

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