export default function Controls({ setGrid, tableTop }) {

  const place = () => {
    setGrid(previousGrid => {
      previousGrid.map(row => {
        row.map(col => true)
      })
    })
  }
  return (
    <div className="Controls">
      <span></span>
      <button>up</button>
      <span></span>
      <button>left</button>
      <button onClick={place}>place</button>
      <button>right</button>
      <span></span>
      <button>down</button>
      <span></span>
    </div>
  )
}
