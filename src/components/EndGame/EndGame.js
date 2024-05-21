import { useEffect, useState } from "react"

const EndGame = ({playerControl, gameOver}) => {

    const [winningPlayer , setWinningPlayer] = useState(0)
    const [winningScore , setWinningScore] = useState(0)

    useEffect(() => {
        console.log(playerControl)
    }, [])

    async function chooseWinner () {
       const winner = playerControl.reduce((prev, current) => {
            if (prev.length === 0 || prev[0].score < current.score) {
              return [current]
            } else if (prev[0].score === current.score) {
              prev.push(current)
            }
            return prev
          }, [])

        setWinningPlayer(await winner[0].player)
        setWinningPlayer(await winner[0].score)

    }

    useEffect(() => {
        if (gameOver) {
            chooseWinner()
        }
        },[gameOver])

    return (
    <>
        <p>Player {winningPlayer} wins with {winningScore} points</p>
    </>
    )
}

export default EndGame