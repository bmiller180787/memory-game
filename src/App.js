import './App.css';
import {useEffect, useState} from "react"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer";
import PlayArea from "./components/PlayArea/PlayArea";
import SubHeader from "./components/SubHeader/SubHeader";
import GameSetup from "./components/GameSetup/GameSetup";
import PlaySubHeader from "./components/PlaySubHeader/PlaySubHeader";

function shufflePlayTiles(doublePlayTiles) {
    let a = [...doublePlayTiles]
    let reps = Math.floor(Math.random() * (10 - 20) + 10)

    for (let i = 0; i < reps; i++) {
        let firstCut = Math.floor(Math.random() * ((doublePlayTiles.length - 1) - 1) + 1)
        let secondCut = Math.floor(Math.random() * (((doublePlayTiles.length - 1) - firstCut) - 1) + 1)
        let b = a.splice(firstCut)
        let c = b.splice(secondCut)
        let y = c.concat(b, a)

        a = []
        a = [...y]
    }
    return a
}
function App() {
    const [players, setPlayers] = useState(0)
    const [grid, setGrid] = useState(0)
    const [isGameSet, setIsGameSet] = useState(false)
    const [gridArray, setGridArray] = useState([])
    const [pointProcessing, setPointProcessing] = useState([])
    const [turnProcessing, setTurnProcessing] = useState([])
    const [playerScore, setPlayerScore] = useState([])

    const playTiles = [
        {name: 1, value: 1},
        {name: 2, value: 2},
        {name: 3, value: 3},
        {name: 4, value: 4},
        {name: 5, value: 5},
        {name: 6, value: 6},
        {name: 7, value: 7},
        {name: 8, value: 8},
        {name: 9, value: 9},
        {name: 10, value: 10},
        {name: 11, value: 11},
        {name: 12, value: 12},
        {name: 13, value: 13},
        {name: 14, value: 14},
        {name: 15, value: 15},
    ]

    const tilesToBeUsed = playTiles.slice(0, grid / 2)
    const doublePlayTiles = tilesToBeUsed.concat(tilesToBeUsed)

    useEffect(() => {
        if (grid > 1 && players > 0) {
            setIsGameSet(true)
        }
    }, [grid, players])

    useEffect(() => {
        for (let i = 1; i <= players; i++) {
            setPlayerScore(prevPlayerScore => [
                ...prevPlayerScore,
                { [`player${i}`]: 0 }
            ])
        }
    }, [players])

    useEffect(() => {
        setGridArray(shufflePlayTiles(doublePlayTiles))
    }, [grid])

    return (
        <>
            <Header />
            {!isGameSet ? <SubHeader players={players} grid={grid}/> : <PlaySubHeader />}
            {isGameSet ? <PlayArea gridArray={gridArray}/> : <GameSetup setPlayers={setPlayers}
                                                                                    setGrid={setGrid}
                                                                                    grid={grid}
                                                                                    players={players}
                                                                                    setGridArray={setGridArray}/>}
            <Footer/>
        </>
    )
}

export default App