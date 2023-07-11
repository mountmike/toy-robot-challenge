import Cell from "./Cell"

export default function Board({ grid, robot }) {
  const checkForRobot = (row, col) => {
    if (!robot) {
      return false
    } else if (row === robot.row && col === robot.col) {
      return true
    } else {
       return false
    }
  }
  
  return (
    <div className="Board">
       { grid.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
              {row.map((cell, colIndex) => (
              <Cell 
                key={`${rowIndex}, ${colIndex}`} 
                robot={checkForRobot(rowIndex, colIndex)}
                facing={robot?.facing}
              /> 
              ))}
          </div> 
        ))}
    </div>
  )
}
