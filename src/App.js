import './App.css';
import {useEffect, useState} from "react"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import PlayArea from "./components/PlayArea/PlayArea"
import SubHeader from "./components/SubHeader/SubHeader"
import GameSetup from "./components/GameSetup/GameSetup"
import PlaySubHeader from "./components/PlaySubHeader/PlaySubHeader"
import EndGame from './components/EndGame/EndGame'

function App() {
    const [players, setPlayers] = useState(0)
    const [grid, setGrid] = useState(0)
    const [gridArray, setGridArray] = useState([])
    const [currentPlayer, setCurrentPlayer] = useState(0)
    const [turnCounter, setTurnCounter] = useState(0)
    const [isGameSet, setIsGameSet] = useState(false)
    const [playerControl, setPlayerControl] = useState([])
    const [gameOver, setGameOver] = useState(false)

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

    useEffect(() => {
        setGameOver(false)
        setCurrentPlayer(0)
    }, [])

    useEffect(() => {
        if (currentPlayer === players) {
            setCurrentPlayer(1)
        } else {
            setCurrentPlayer(currentPlayer + 1)
        }
    }, [turnCounter])

    useEffect(() => {
        if (grid > 1 && players > 0) {
            setIsGameSet(true)
        }
    }, [grid, players])

    useEffect(() => {
        for (let i = 1; i <= players; i++) {
            setPlayerControl(x => [
                ...x,
                {
                    ["player"] : i , "score" : 0
                }])
        }
    }, [players])

    useEffect(() => {
        fetch("https://picsum.photos/v2/list?page=2&limit=50")
            .then((res) => res.json())
            .then((res) => {
                const tilesToBeUsed = res.slice(0, grid / 2)
                const doublePlayTiles = tilesToBeUsed.concat(tilesToBeUsed)
                setGridArray(shufflePlayTiles(doublePlayTiles))
            })
    }, [grid])

    return (
        <>
            <Header/>
            {!isGameSet ? <SubHeader players={players} grid={grid} /> : <PlaySubHeader currentPlayer={currentPlayer} />}
            {isGameSet ? <PlayArea gridArray={gridArray}
                                   setPlayerControl={setPlayerControl}
                                   playerControl={playerControl}
                                   currentPlayer={currentPlayer}
                                   setTurnCounter={setTurnCounter}
                                   turnCounter={turnCounter}
                                   setGameOver={setGameOver} />
                        : <GameSetup setPlayers={setPlayers}
                                    setGrid={setGrid}
                                    grid={grid}
                                    players={players}
                                    setGridArray={setGridArray} />}
            {!gameOver ? "" : <EndGame playerControl={playerControl} 
                                gameOver={gameOver} 
                                setGrid={setGrid} 
                                setPlayers={setPlayers} 
                                setIsGameSet={setIsGameSet} 
                                setTurnCounter={setTurnCounter} 
                                setCurrentPlayer={setCurrentPlayer}
                                setGameOver={setGameOver}
                                setPlayerControl={setPlayerControl}/> }
            <Footer/>
        </>
    )
}

export default App