const SetGrid = ({setGrid}) => {
    return (
        <div className="setupSelection">
                <button onClick={()=>setGrid(3)}>3 x 3</button>
                <button onClick={()=>setGrid(4)}>4 x 4</button>
                <button onClick={()=>setGrid(5)}>5 x 5</button>
                <button onClick={()=>setGrid(6)}>6 x 6</button>
        </div>
    )
}

export default SetGrid