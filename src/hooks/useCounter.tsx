import { useState } from "react"
type CounterProps = {
    initialCount?: number
}
export const useCounter = ({ initialCount = 0 }: CounterProps = {}) => {
    // const state = initialCount ? initialCount : 0
    const [count, setCount] = useState(initialCount)
    const increment = () => setCount(current => current + 1)
    const decrement = () => setCount(current => current - 1)

    return {
        count, increment, decrement
    }
}