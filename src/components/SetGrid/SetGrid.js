import {useEffect} from "react";

const SetGrid = ({setGrid}) => {

    return (
        <div className="setupSelection">
                <button onClick={()=>setGrid(12)}>12</button>
                <button onClick={()=>setGrid(24)}>24</button>
                <button onClick={()=>setGrid(30)}>30</button>
        </div>
    )
}

export default SetGrid
