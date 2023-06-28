import { useEffect, useState } from 'react';
import './App.css';
import Board from './components/Board'
import Controls from './components/Controls';
import { TableTop, Robot } from './utils/Classes';

const tableTop = new TableTop()
const defaultGrid = [
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false]
]

function App() {
  const [grid, setGrid] = useState(defaultGrid)


  return (
    <div className="App">
      <aside>
        <Controls 
          setGrid={setGrid}
          tableTop={tableTop}
        />
      </aside>
      <main>
        <Board
          grid={grid}
        />
      </main>
      

    </div>
  );
}

export default App;
