import Cell from "./Cell"

export default function Board({ grid }) {
  return (
    <div className="Board">
       { grid?.map(row => (
            <div className="row">
                {row.map((cell, index) => <Cell key={index} content={cell} /> )}
            </div> 
        ))}
    </div>
  )
}
