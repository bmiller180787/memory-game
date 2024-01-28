import './App.css';
import {useEffect, useState} from "react"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer";
import PlayArea from "./components/PlayArea/PlayArea";
import SubHeader from "./components/SubHeader/SubHeader";
import GameSetup from "./components/GameSetup/GameSetup";

function App() {
    const [players, setPlayers] = useState(0)
    const [grid, setGrid] = useState(0)
    const [isGameSet, setIsGameSet] = useState(false)
    const [playerNames, setPlayerNames] = useState([])

  /* come back to work out how to input names for players
  const handleNameChange = (index, name) => {
        const updatedNames = [...playerNames];
        updatedNames[index] = name;
        setPlayerNames(updatedNames);
    }*/

    return (
        <>
            <Header players={players}/>
            <SubHeader players={players} grid={grid}/>
            {isGameSet ? <PlayArea grid={grid}/> : <GameSetup setPlayers={setPlayers}
                                                              setGrid={setGrid}
                                                              grid={grid}
                                                              setIsGameSet={setIsGameSet}
                                                              players={players}/>}
            <Footer/>
        </>
    )
}

export default App