import "./PlayArea.css"

const PlayArea = ({gridArray, setPlayerControl, playerControl, currentPlayer, setTurnCounter, turnCounter, matchCheck, setMatchCheck}) => {

    const currentPlayerIndex = playerControl.findIndex((e) => e.player === currentPlayer)
    const currentScore = playerControl[currentPlayerIndex].score

//  to select which index to add tile value to   
    function addMatchIndex () {
        if (matchCheck.length === 0) {
            return 0
        }
        return 1
    }

// to check if the tiles match   
    function checkMatch () {
        if (matchCheck.length === 2){
            if (matchCheck[0] === matchCheck[1]){
                return true
            }
            return false
        }
        return false
    }

    function updatePlayerScore () {
        setPlayerControl(playerControl.map((newPlayerControl, i) => {
            if (i === currentPlayerIndex) {
                return {player : currentPlayerIndex + 1, score : currentScore + 1}
            } else {
                return newPlayerControl
            }
        }))
    }

    function handleClick () {

        console.log (checkMatch())
        if (checkMatch()) {

        } else {
            console.log("handleClick not working")
        }
        setTurnCounter(turnCounter + 1)
    }

    return (
        <>
            <div className="playingGrid">
                {gridArray.map((tile, key) => {
                    return (
                        <div onClick={handleClick} key={key} className="tile" value={tile.value}>
                            <p>{tile.name}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default PlayArea