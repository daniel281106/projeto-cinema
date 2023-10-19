import GlobalStyle from "./styles/global";
import Header from "./componets/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Diretor from "./pages/diretor"
import Filmes from "./pages/filmes"

function App() {

  return (

    <>
      <Header />
      <Router>
        <Routes>
        <Route path="/" />
        <Route path="/diretor" element={<Diretor/>} />
        <Route path="/filmes" element={<Filmes/>} />
        </Routes>

      </Router>

      <GlobalStyle />
    </>
  )
}

export default App
