import './App.css';
import {useEffect, useState} from "react"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer";
import PlayArea from "./components/PlayArea/PlayArea";


function App() {
    const [players, setPlayers] = useState(1)
    const [grid , setGrid] = useState(3)

  return (
      <>
          <Header />
          <PlayArea />
          <Footer />
      </>
  )
}

export default App
