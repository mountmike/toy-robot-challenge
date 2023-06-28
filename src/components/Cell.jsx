export default function Cell({ content }) {
  return (
    <div className="cell-wrapper">
      {content && "X"}
    </div>
  )
}
