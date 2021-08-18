import { useState, FC } from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from "../features/counter/counterSlice"

const IndexPage: FC = () => {
  const dispatch = useAppDispatch()
  const count = useAppSelector(selectCount)

  const [amount, setAmount] = useState(0)

  return (
    <>
      <h1>Welcome to the greatest app in the world!</h1>
      <h2>The current number is {count}</h2>

      <div>
        <input
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          type='number'
        />
        <button onClick={() => dispatch(incrementByAmount(Number(amount)))}>
          Increment by amount
        </button>
      </div>

      <div>
        <button onClick={() => dispatch(decrement())}>Decrement by 1</button>
        <button onClick={() => dispatch(increment())}>Increment by 1</button>
      </div>
    </>
  )
}

export default IndexPage

// http://localhost:3000/
