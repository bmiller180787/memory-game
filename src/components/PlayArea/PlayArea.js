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
        let currentIndex = playerControl.findIndex((obj) => Object.keys(obj)[0] === currentPlayer)
        console.log(currentIndex)
        
        if (currentIndex !== -1) {
            setPlayerControl[currentIndex][currentPlayer] ++
        }
        console.log("Find Index not working")
    }

    console.log(currentPlayer)

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