import "./PlayArea.css"

const PlayArea = ({gridArray, setPlayerControl, playerControl, currentPlayer, setTurnCounter, turnCounter, matchCheck, setMatchCheck}) => {

    const currentPlayerIndex = playerControl.findIndex((e) => e.player === currentPlayer)
    const currentScore = playerControl[currentPlayerIndex]

//  to select which index to add tile value to   
    function addMatchIndex () {
        if (matchCheck.length === 0) {
            return 0
        }
        return 1
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

    const handleClick = (value) => {
        if (matchCheck.length !== 2) {
            setMatchCheck(prevMatchCheck => [...prevMatchCheck, value])
        }
        setTurnCounter(turnCounter + 1)
    }

    return (
        <>
            <div className="playingGrid">
                {gridArray.map((tile, key) => {
                    return (
                        <div onClick={() => handleClick(tile.value)} key={key} className="tile">
                            <p>{tile.name}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default PlayArea