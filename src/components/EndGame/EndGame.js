import { useEffect, useState } from "react"
import "./EndGame.css"


const EndGame = ({playerControl, gameOver, setGrid, grid, setPlayers, setIsGameSet, setTurnCounter, setCurrentPlayer, setGameOver, setPlayerControl}) => {

    const [winningPlayer , setWinningPlayer] = useState(0)
    const [winningScore , setWinningScore] = useState(0)

    async function resetArray () {
        const currentGrid = grid
        await setGrid(0)
        setGrid(currentGrid)
    }

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

    // function playAgain () {
    //     resetArray()
    //     setTurnCounter(1)
    //     setCurrentPlayer(0)
    //     setGameOver(false)
    // }

    useEffect(() => {
        if (gameOver) {
            chooseWinner()
        }
        },[gameOver])

    return (
    <div className="endgamemodalbackground">
        <div className="endgamemodal">
            <h2 className="subHeaderText">Player {winningPlayer} wins with {winningScore} points</h2>
            {/* <button onClick={() => playAgain()} className="tile">
                Play Again
            </button> */}
            <button onClick={() => resetGame()} className="tile">
                Reset Game
            </button>
        </div>
    </div>
    )
}

export default EndGame