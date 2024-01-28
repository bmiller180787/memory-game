const SetGrid = ({setGrid}) => {
    return (
        <div className="gridSelectionMain">
            <p>Select size of Grid</p>
            <div className="gridSelection">
                <button onClick={()=>setGrid(3)}>3x3</button>
                <button onClick={()=>setGrid(4)}>4x4</button>
                <button onClick={()=>setGrid(5)}>5x5</button>
                <button onClick={()=>setGrid(6)}>6x6</button>
            </div>

        </div>
    )
}

export default SetGrid