import "./PlayArea.css"

const PlayArea = ({gridArray, setPlayerControl, playerControl, currentPlayer, turnCounter, setTurnCounter, matchCheck, setMatchCheck}) => {

    const currentPlayerIndex = playerControl.findIndex((e) => e.player === currentPlayer)
    const currentScore = playerControl[currentPlayerIndex].score

    const checkMatch = () => {
            if (matchCheck[0] === matchCheck[1]) {
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

    const handleClick = (value) => {
        if (matchCheck.length !== 2) {
            setMatchCheck(prevMatchCheck => [...prevMatchCheck, value])
            } else {
                setTurnCounter(turnCounter + 1)
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