import "./PlayArea.css"

const PlayArea = ({gridArray, setPlayerControl, playerControl, currentPlayer, turnCounter, setTurnCounter}) => {

    let matchCheckArray = []
    const currentPlayerIndex = playerControl.findIndex((e) => e.player === currentPlayer)
    const currentScore = playerControl[currentPlayerIndex].score

    const checkMatch = () => {
            if (matchCheckArray[0] === matchCheckArray[1]) {
                return true
            } else {
            return false
            }
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

    function addToMatchCheckArray (value) {
            matchCheckArray.push(value)
    }

    function handleClick (value) {
        if (matchCheckArray.length === 2) {
            if (checkMatch()) {
                updatePlayerScore()
                matchCheckArray = []
            } else {
                setTurnCounter(turnCounter + 1)
            }
        } else {
            addToMatchCheckArray(value)
        }
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