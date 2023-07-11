import { useState } from "react"

export default function Controls({ init, grid, robot, setRobot }) {
  const [report, setReport] = useState(null)

  const move = () => {
    if (!robot) {
      setReport("Please place robot on grid to move!")
      return
    }

    setReport(null)

    if (robot.facing == "North") {
      if (robot.row > 3) {
        setReport("Uh oh, I don't want to fall off the table top!")
        return
      }
      setRobot({ ...robot, row: robot.row + 1})
    } else if (robot.facing == "East") {
      if (robot.col > 3) {
        setReport("Uh oh, I don't want to fall off the table top!")
        return
      }
      setRobot({ ...robot, col: robot.col + 1})
    } else if (robot.facing == "South") {
      if (robot.row < 1) {
        setReport("Uh oh, I don't want to fall off the table top!")
        return
      }
      setRobot({ ...robot, row: robot.row - 1})
    } else if (robot.facing == "West") {
      if (robot.col < 1) {
        setReport("Uh oh, I don't want to fall off the table top!")
        return
      }
      setRobot({ ...robot, col: robot.col - 1})
    }
  }

  const handleRotate = (e) => {
    if (!robot) {
      setReport("Please place robot on grid before rotating!")
      return
    }
    
    const compass = ["North", "East", "South", "West"]
    let currentIndex = compass.indexOf(robot.facing)

    if (e.target.value == "clockwise") {
      let newDirection = currentIndex === compass.length -1 ? compass[0] : compass[currentIndex + 1]
      setRobot({...robot, facing: newDirection})
    } else if (e.target.value == "antiClockwise") {
      let newDirection = currentIndex === 0 ? compass[3] : compass[currentIndex - 1]
      setRobot({...robot, facing: newDirection})
    }
  }

  const getReport = () => {
    if (!robot) {
      setReport("Please place robot on grid to see report!")
      return
    }
    setReport(`The robot is at row ${robot.row} & column ${robot.col} and is facing ${robot.facing}`)
  }

  return (
    <div className="Controls">
      <button onClick={init}>place robot</button>
      <button onClick={move}>move</button>
      <button onClick={handleRotate} value={"clockwise"}>rotate right</button>
      <button onClick={handleRotate} value={"antiClockwise"}>rotate left</button>
      <button onClick={getReport}>report</button>

      <p className="report-output">
        {report}
      </p>

    </div>
  )
}
