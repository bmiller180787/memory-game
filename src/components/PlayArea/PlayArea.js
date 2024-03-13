import "./PlayArea.css"

const PlayArea = ({gridArray, setPlayerControl, playerControl, currentPlayer, setCurrentPlayer}) => {

    // function handleClick() {
    //     setPlayerControl((prevPlayerControl) => {
    //         const currentPlayerIndex = prevPlayerControl.findIndex(
    //             (playerObject) => Object.keys(playerObject)[0] === currentPlayer
    //         )

    //         if (currentPlayerIndex !== -1) {
    //             prevPlayerControl[currentPlayerIndex][currentPlayer] + 1
    //         }

    //         setPlayerControl([...prevPlayerControl])
    //     })
    // }

    function handleClick () {
        const currentIndex = playerControl.findIndex((e) => e.player === currentPlayer)
        console.log("Current index " + currentIndex)
        
        if (currentIndex !== -1) {
            setPlayerControl(playerControl[currentIndex].currentPlayer + 1)
        } else {
            console.log(`Current Player = ${currentPlayer}`)
        }
    }

    console.log(`Current Player = ${currentPlayer}`)

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