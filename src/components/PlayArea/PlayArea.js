import "./PlayArea.css"

const PlayArea = ({gridArray, setPlayerControl, playerControl, currentPlayer, setCurrentPlayer}) => {

    function handleClick() {
        setPlayerControl((prevPlayerControl) => {
            const currentPlayerIndex = prevPlayerControl.findIndex(
                (playerObject) => Object.keys(playerObject)[0] === currentPlayer

            )
            if (currentPlayerIndex !== -1) {
                prevPlayerControl[currentPlayerIndex][currentPlayer].turn += 1
            }
            return [...prevPlayerControl]
        });

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