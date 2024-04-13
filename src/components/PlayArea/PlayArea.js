import "./PlayArea.css"
import { useEffect, useState, useRef } from "react"

const PlayArea = ({gridArray, playerControl, currentPlayer, setPlayerControl, setTurnCounter, turnCounter}) => {

    const classChange = useRef({})
    const currentPlayerIndex = playerControl.findIndex((e) => e.player === currentPlayer)
    const currentScore = playerControl[currentPlayerIndex].score
    const [matchCheck, setMatchCheck] = useState([])
    const [matchedTiles, setMatchedTiles] = useState([])

    useEffect(() => {
        if (matchCheck.length === 2){
            if (checkMatch()) {
                updatePlayerScore()
                setMatchedTiles(x => [
                    ...x,
                    ...matchCheck.slice()])
                setMatchCheck([])
            } else {
                setTurnCounter(turnCounter + 1)
                setMatchCheck([])
            }
        }
    }, [matchCheck])

    function updatePlayerScore () {
        setPlayerControl(playerControl.map((newPlayerControl, i) => {
            if (i === currentPlayerIndex) {
                return {player : currentPlayerIndex + 1, score : currentScore + 1}
            } else {
                return newPlayerControl
            }
        }))
    }

    function checkMatch () {
        if (matchCheck.length === 2) {
            if (matchCheck[0].value === matchCheck[1].value) {
                return true
            } else {
                return false            
            }
        }
    }

    function cycleVisible (value, key) {
        const selectedTile = classChange.current[key]
        if (!matchedTiles.includes(value)){
            if (selectedTile.classList.contains("visible")){
                selectedTile.classList.remove("visible")
            } else {
                selectedTile.classList.add("visible")
            }
        }
    }

    function addToMatchCheck (value, key) {
        setMatchCheck([...matchCheck, {"tile" : key , "value" : value}])
    }

    function removeFromMatchCheck (key) {
        const newMatchCheck = matchCheck.filter((x, e) => e !== key)
        setMatchCheck([...newMatchCheck])
    }

    function handleClick (value, key) {
        addToMatchCheck(value, key)
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