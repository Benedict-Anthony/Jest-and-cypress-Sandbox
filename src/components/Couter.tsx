import React, { useState } from 'react'

const Couter = () => {
    const [count, setCount] = useState(0)
    const [amount, setAmount] = useState(0)
    return (
        <div>
            <h2>Amount {amount}</h2>
            <h1>Couter {count}</h1>
            <form action="">
                <input type="number" data-testid="counter" value={amount} onChange={(e) => setAmount(parseInt(e.target.value))} />
            </form>
            <div>
                <button data-testid="increment" onClick={() => setCount(current => current + 1)}>increase</button>
                <button data-testid="decrement" onClick={() => setCount(current => current - 1)} >decrease</button>
            </div>
        </div>
    )
}

export default Couter