import { useEffect, useState } from "react"
import "./EndGame.css"


const EndGame = ({playerControl, gameOver, setGrid, grid, setPlayers, setIsGameSet, setTurnCounter, setCurrentPlayer, setGameOver, setPlayerControl}) => {

    const [winningPlayer , setWinningPlayer] = useState(0)
    const [winningScore , setWinningScore] = useState(0)

    async function chooseWinner () {
       const winner = playerControl.reduce((prev, current) => {
            if (prev.length === 0 || prev[0].score < current.score) {
              return [current]
            } else if (prev[0].score === current.score) {
              prev.push(current)
            }
            return prev
          }, [])

        setWinningScore(await winner[0].score)
        setWinningPlayer(await winner[0].player)
    }

    function resetGame () {
        setGrid(0)
        setPlayers(0)
        setIsGameSet(false)
        setTurnCounter(1)
        setCurrentPlayer(1)
        setGameOver(false)
        setPlayerControl([])
    }

    useEffect(() => {
        if (gameOver && playerControl.length > 0) {
            chooseWinner()
        }
        },[gameOver])

    return (
    <div className="endgamemodalbackground">
        <div className="endgamemodal">
            <h2 className="subHeaderText">Player {winningPlayer} wins with {winningScore} points</h2>
            <button onClick={() => resetGame()} className="tile">
                Reset Game
            </button>
        </div>
    </div>
    )
}

export default EndGame