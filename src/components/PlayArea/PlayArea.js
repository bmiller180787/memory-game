import "./PlayArea.css"

const PlayArea = ({gridArray, setPlayerControl, playerControl, currentPlayer, turnCounter, setTurnCounter, matchCheck, setMatchCheck}) => {

    const currentPlayerIndex = playerControl.findIndex((e) => e.player === currentPlayer)
    const currentScore = playerControl[currentPlayerIndex].score

    function updatePlayerScore () {
        setPlayerControl(playerControl.map((newPlayerControl, i) => {
            if (i === currentPlayerIndex) {
                return {player : currentPlayerIndex + 1, score : currentScore + 1}
            } else {
                return newPlayerControl
            }
        }))
    }

    function addToMatchCheck (value, key) {
        setMatchCheck([...matchCheck, {"tile" : key , "value" : value}])
    }

    function removeFromMatchCheck (key) {
        const newMatchCheck = matchCheck.filter((x, e) => e !== key)
        setMatchCheck([...newMatchCheck])
    }

    function handleClick (value, key) {
        const findMatchCheckIndex = matchCheck.findIndex((e) => e.tile === key)
        console.log(findMatchCheckIndex)
        if (matchCheck.length === 0 || findMatchCheckIndex === -1) {
            addToMatchCheck(value, key)
        } else {
            removeFromMatchCheck(findMatchCheckIndex)
        }
    }

    return (
        <>
            <div className="playingGrid">
                {gridArray.map((tile, key) => {
                    return (
                        <div onClick={() => handleClick(tile.value, key)} key={key} className="tile">
                            <p>{tile.name}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default PlayArea