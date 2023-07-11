import { useEffect, useState } from 'react';
import './App.css';
import Board from './components/Board'
import Controls from './components/Controls';


function App() {
  const [grid, setGrid] = useState([
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false]
  ])
  const [robot, setRobot] = useState(null)

  const init = () => {
    setRobot({
      facing: "North",
      row: 0,
      col: 0
    })
  }

  return (
    <div className="App">
      <aside>
        <Controls 
          init={init}
          grid={grid}
          robot={robot}
          setRobot={setRobot}
        />
      </aside>
      <main>
        <Board
          grid={grid}
          robot={robot}
        />
      </main>
      

    </div>
  );
}

export default App;
