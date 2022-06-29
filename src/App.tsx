import { Tablero, Mano } from './components/UI';
import './App.css'


function App() {

  return (

        <div className="App">
          {/* <Tablero stars={0} card={ { card } as unknown as ICard }/> */}
          <Tablero stars={0}  />
          <Mano />
        </div>

  )
}

export default App
