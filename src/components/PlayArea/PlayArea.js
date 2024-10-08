import "./PlayArea.css"
import { useEffect, useState, useRef } from "react"

const PlayArea = ({gridArray, setPlayerControl, playerControl, currentPlayer, setTurnCounter, turnCounter, setGameOver}) => {

    const classChange = useRef({})
    const currentPlayerIndex = playerControl.findIndex((e) => e.player === currentPlayer)
    const currentScore = playerControl[currentPlayerIndex].score
    const [matchCheck, setMatchCheck] = useState([])
    const [matchedTiles, setMatchedTiles] = useState([])

    useEffect(() => {
        if (matchCheck.length === 2){
            if (checkMatch()) {
                handleMatch ()
            } else {
                handleNoMatch()
            }
        }
    }, [matchCheck])

    useEffect(() => {
        if (matchedTiles.length === gridArray.length && matchedTiles.length > 0) {
            setGameOver(true)
        }
    }, [matchedTiles])

    function clearVisibleTiles() {
        for (let i = 0; i < matchCheck.length; i++) {
            const selectedIndex = matchCheck[i].tile
            const selectedTile = classChange.current[selectedIndex]
            if (selectedTile.classList.contains("visible")) {
                selectedTile.classList.remove("visible")
            }
        }
    }
    
    function handleNoMatch() {
        setTurnCounter(turnCounter + 1)
        setTimeout(clearVisibleTiles, 1500)
        setTimeout(setMatchCheck([]), 1600)
    }

    function handleMatch () {
        updatePlayerScore()
        const newMatchedTiles = [...matchedTiles]
        matchCheck.forEach(({ tile }) => newMatchedTiles.push(tile))
        setMatchedTiles(newMatchedTiles)
        setMatchCheck([])
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

    function checkMatch () {
        if (matchCheck.length === 2) {
            if (matchCheck[0].value === matchCheck[1].value) {
                return true
            } else {
                return false            
            }
        }
    }

    function cycleVisible (key) {
        const findMatchedTileIndex = matchedTiles.findIndex((e) => e.tile === key)
        const selectedTile = classChange.current[key]
        if (findMatchedTileIndex === -1){
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
        const findMatchCheckIndex = matchCheck.findIndex((e) => e.tile === key)
        if ((findMatchCheckIndex === -1)){
            addToMatchCheck(value, key)
        } else {
            removeFromMatchCheck(findMatchCheckIndex)
        }
        cycleVisible(key)
    }

    return (
            <div className="playingGrid">
                {gridArray.map((tile, key) => {
                    return (
                        <button ref={(e) => (classChange.current[key] = e)} onClick={() => handleClick(tile.id, key)} key={key} className="tile" disabled={matchedTiles.includes(key)}>
                            <img src={tile.download_url} className="tileimage"/>
                        </button>
                    )
                })}
            </div>
    )
}

export default PlayArea