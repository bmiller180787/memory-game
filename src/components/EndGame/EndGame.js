import { useEffect, useState } from "react"

const EndGame = ({playerControl, gameOver}) => {

    const [winningPlayer , setWinningPlayer] = useState(0)
    const [winningScore , setWinningScore] = useState(0)

    useEffect(() => {
        const winner = playerControl.reduce((prev, current) => {
            if (prev.length === 0 || prev[0].score < current.score) {
              return [current]
            } else if (prev[0].score === current.score) {
              prev.push(current)
            }
            return prev
          }, [])

          console.log(winner)

        setWinningPlayer(winner.player)
        setWinningScore(winner.score)
    },[gameOver])

    console.log(winningPlayer)
    console.log(winningScore)

    return (
    <>
        <p>Player {winningPlayer} wins with {winningScore} points</p>
    </>
    )
}

export default EndGame