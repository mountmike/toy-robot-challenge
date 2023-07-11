export default function Cell({ robot, facing }) {
  return (
    <div className={robot ? `cell-wrapper ${facing}` : "cell-wrapper"}>
      {robot && "🤖"}
    </div>
  )
}
