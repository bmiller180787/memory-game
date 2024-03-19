import "./PlayArea.css"

const PlayArea = ({gridArray, setPlayerControl, playerControl, currentPlayer, setTurnCounter, turnCounter, matchCheck, setMatchCheck}) => {

    const currentPlayerIndex = playerControl.findIndex((e) => e.player === currentPlayer)
    const currentScore = playerControl[currentPlayerIndex].score
    const scoreIndex = matchCheck.length - 1

    function addMatchTiles () {
        if (matchCheck.length === 0) {
            return 0
        }
        return 1
    }

    function checkMatch () {
        if (matchCheck.length === 2){
            if (matchCheck[0] === matchCheck[1]){
                return true
            }
    return false
    }}

    function handleClick () {
        
        if (matchCheck.length = 0) {
            
        }

        if (currentPlayerIndex !== -1) {
            setPlayerControl(playerControl.map((newPlayerControl, i) => {
                if (i === currentPlayerIndex) {
                    return {player : currentPlayerIndex + 1, score : currentScore + 1}
                } else {
                    return newPlayerControl
                }
            }))
        } else {
            console.log("Handle Click not working")
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