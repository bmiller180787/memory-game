const PlaySubHeader = ({currentPlayer}) => {
    return (
        <>
            <h2 className="subHeaderText">Player {currentPlayer.slice(-1)}'s turn</h2>
        </>
    )
}

export default PlaySubHeader