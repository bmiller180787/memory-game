const SetGrid = ({setGrid}) => {

    return (
        <div className="setupSelection">
                <button onClick={()=>setGrid(6)}>6</button>
                <button onClick={()=>setGrid(12)}>12</button>
                <button onClick={()=>setGrid(18)}>18</button>
        </div>
    )
}

export default SetGrid
