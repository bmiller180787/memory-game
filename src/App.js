import './App.css';
import {useEffect, useState} from "react"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer";
import PlayArea from "./components/PlayArea/PlayArea";
import SubHeader from "./components/SubHeader/SubHeader";
import GameSetup from "./components/GameSetup/GameSetup";


function App() {
    const [players, setPlayers] = useState(1)
    const [grid, setGrid] = useState(3)
    const [isGameSet, setIsGameSet] = useState(false)
    const [isPlayersSelected , setIsPlayersSelected] = useState(false)

    return (
        <>
            <Header players={players}/>
            <SubHeader/>
            {isGameSet ? <PlayArea grid={grid}/> : <GameSetup setPlayers={setPlayers}
                                                              players={players}
                                                              setIsPlayersSelected={setIsPlayersSelected}
                                                              setGrid={setGrid}/>}
            <Footer/>
        </>
    )
}

export default App
