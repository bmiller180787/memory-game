import { useEffect, useState } from "react"

const EndGame = ({playerControl, gameOver}) => {

    const [winningPlayer , setWinningPlayer] = useState(0)
    const [winningScore , setWinningScore] = useState(0)

    function chooseWinner () {
       return playerControl.reduce((prev, current) => {
            if (prev.length === 0 || prev[0].score < current.score) {
              return [current]
            } else if (prev[0].score === current.score) {
              prev.push(current)
            }
            return prev
          }, [])
    }

    useEffect(() => {
        chooseWinner()
        // setWinningPlayer(winner[0].player)
        // setWinningScore(winner[0].score)
    },[gameOver])

    console.log(chooseWinner())


    return (
    <>
        <p>Player {winningPlayer} wins with {winningScore} points</p>
    </>
    )
}

export default EndGame