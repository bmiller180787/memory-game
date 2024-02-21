const SetPlayers = ({setPlayers}) => {
    return (
        <div className="setupSelection">
            <button onClick={()=>setPlayers(1)}>1</button>
            <button onClick={()=>setPlayers(2)}>2</button>
            <button onClick={()=>setPlayers(3)}>3</button>
        </div>
    )
}

export default SetPlayers