import "./PlayArea.css"

const PlayArea = ({gridArray, playerControl, currentPlayer, matchCheck, setMatchCheck}) => {

    function addToMatchCheck (value, key) {
        setMatchCheck([...matchCheck, {"tile" : key , "value" : value}])
    }

    function removeFromMatchCheck (key) {
        const newMatchCheck = matchCheck.filter((x, e) => e !== key)
        setMatchCheck([...newMatchCheck])
    }

    function handleClick (value, key) {
        const findMatchCheckIndex = matchCheck.findIndex((e) => e.tile === key)
        if (matchCheck.length === 0 || findMatchCheckIndex === -1) {
            addToMatchCheck(value, key)
        } else {
            removeFromMatchCheck(findMatchCheckIndex)
        }
    }

    return (
        <>
            <div className="playingGrid">
                {gridArray.map((tile, key) => {
                    return (
                        <div onClick={() => handleClick(tile.value, key)} key={key} className="tile">
                            <p>{tile.name}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default PlayArea