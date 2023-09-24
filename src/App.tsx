import { useState } from "react"

function App() {
  const [count, useCount] = useState(0)
  const plusOne = () => {
    useCount(count+1)
  }
  const minusOne = () => {
    useCount(count-1)
  }

  return (
    <div className="App">
      <div className="counter">{count}</div>
      <div className="buttons">
        <button className="button green" onClick={plusOne}>+</button>
        <button className="button red" onClick={minusOne}>-</button>
      </div>
    </div>
  )
}

export default App
