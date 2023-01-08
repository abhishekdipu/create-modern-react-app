import { useState } from 'react'

const ClickCounter = () => {
  const [count, setCount] = useState(0)
  return (
    <h3>
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </h3>
  )
}

export default ClickCounter
