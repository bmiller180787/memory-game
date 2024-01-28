import './App.css';
import {useEffect, useState} from "react"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer";
import PlayArea from "./components/PlayArea/PlayArea";
import SubHeader from "./components/SubHeader/SubHeader";
import GameSetup from "./components/GameSetup/GameSetup";


function App() {
    const [players, setPlayers] = useState(0)
    const [grid, setGrid] = useState(3)
    const [isGameSet, setIsGameSet] = useState(false)

    return (
        <>
            <Header players={players}/>
            <SubHeader players={players}/>
            {isGameSet ? <PlayArea grid={grid}/> : <GameSetup setPlayers={setPlayers}
                                                              setGrid={setGrid}
                                                              setIsGameSet={setIsGameSet}
                                                              players={players}/>}
            <Footer/>
        </>
    )
}

export default App
