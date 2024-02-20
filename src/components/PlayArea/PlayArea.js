import "./PlayArea.css"

const PlayArea = ({gridArray}) => {

    return (
        <>
            <div className="playingGrid">
            {gridArray.map((tile, key) => {
                return (
                    <div key={key} className="tile">
                        <p>{tile.name}</p>
                    </div>
                )
            })}
            </div>
        </>
    )
}

export default PlayArea
