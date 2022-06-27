import { Tablero, Mano } from './components/UI';
import './App.css'
import { useContext } from 'react';
import { TableContext } from './context/table';
import { ICard } from './interfaces/index';

function App() {
  //Todo configurar tablero
  // const {card} = useContext(TableContext)

  return (

        <div className="App">
          {/* <Tablero stars={0} card={ { card } as unknown as ICard }/> */}
          <Tablero stars={0}  />
          <Mano />
        </div>

  )
}

export default App
