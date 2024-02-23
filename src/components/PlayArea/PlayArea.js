import "./PlayArea.css"

const PlayArea = ({gridArray, pointProcessing, turnProcessing, setPointProcessing, setTurnProcessing}) => {

    function handleClick() {

    }

    return (
        <>
            <div className="playingGrid">
                {gridArray.map((tile, key) => {
                    return (
                        <div onClick={handleClick} key={key} className="tile">
                            <p>{tile.name}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default PlayArea
