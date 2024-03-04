import "./PlayArea.css"

const PlayArea = ({gridArray, setPlayerControl, playerControl, currentPlayer, setCurrentPlayer}) => {

    function handleClick() {
        setPlayerControl((prevPlayerControl) => {
            const currentPlayerIndex = prevPlayerControl.findIndex(
                (playerControl) => Object.keys(playerControl)[0] === currentPlayer
            )
            if (currentPlayerIndex !== -1) {
                prevPlayerControl[currentPlayerIndex][currentPlayer] += 1
            }

            if (currentPlayer.slice(-1) === "3") {
                setCurrentPlayer("player1")
            } else if (currentPlayer.slice(-1) === "2") {
                setCurrentPlayer("player3")
            } setCurrentPlayer("player2")

            return [...prevPlayerControl]
        })
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