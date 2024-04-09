import "./PlayArea.css"
import { useRef } from "react"

const PlayArea = ({gridArray, playerControl, currentPlayer, matchCheck, setMatchCheck, setPlayerControl, matchedTiles, setMatchedTiles}) => {

    const currentPlayerIndex = playerControl.findIndex((e) => e.player === currentPlayer)
    const currentScore = playerControl[currentPlayerIndex].score
    const classChange = useRef({})

    function checkMatch () {
        if (matchCheck[0] === matchCheck[1]) {
            return true
        } else {
        return false
        }
    }

    function cycleVisible (key) {
        const selectedTile = classChange.current[key]

        if (selectedTile.classList.contains("visible")){

            selectedTile.classList.remove("visible")
        } else {
            selectedTile.classList.add("visible")
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

    function addToMatchCheck (value, key) {
        setMatchCheck([...matchCheck, {"tile" : key , "value" : value}])
    }

    function removeFromMatchCheck (key) {
        const newMatchCheck = matchCheck.filter((x, e) => e !== key)
        setMatchCheck([...newMatchCheck])
    }

    function handleClick (value, key) {
        const findMatchCheckIndex = matchCheck.findIndex((e) => e.tile === key)
        cycleVisible(key)

        addToMatchCheck(value, key)

        if (matchCheck.length === 2) {

            if (checkMatch()) {
                updatePlayerScore()
                setMatchCheck([])
            } else {

            }
        } else {

        }
    }

    return (
        <>
            <div className="playingGrid">
                {gridArray.map((tile, key) => {
                    return (
                        <div ref={(e) => (classChange.current[key] = e)} onClick={() => handleClick(tile.value, key)} key={key} className="tile">
                            <p className="tiletext">{tile.name}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default PlayArea