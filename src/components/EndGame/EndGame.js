const EndGame = ({winner}) => {

    return (
    <>
    
        <p>Player {winner[0].player} wins with {winner[0].score} points</p>
    </>
    )
}

export default EndGame