import "./PlayArea.css"
import { useRef } from "react"

const PlayArea = ({gridArray, playerControl, currentPlayer, matchCheck, setMatchCheck, setPlayerControl}) => {

    const currentPlayerIndex = playerControl.findIndex((e) => e.player === currentPlayer)
    const currentScore = playerControl[currentPlayerIndex].score
    const classCycling = useRef({})

    function checkIfTilesBeenClicked () {
        

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

        const element = classCycling.current[key]

        if (matchCheck.length === 0 || findMatchCheckIndex === -1) {
            addToMatchCheck(value, key)
            element.classList.add("thisone")
        } else {
            removeFromMatchCheck(findMatchCheckIndex)
            element.classList.remove("thisone")
        }
    }

    return (
        <>
            <div className="playingGrid">
                {gridArray.map((tile, key) => {
                    return (
                        <div ref={(e) => (classCycling.current[key] = e)} onClick={() => handleClick(tile.value, key)} key={key} className="tile">
                            <p className="tiletext">{tile.name}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default PlayArea