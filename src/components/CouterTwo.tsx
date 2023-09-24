import React from 'react'

type CounterTwoProps = {
    count: number
    handleIncrement?: () => void
    handleDecrement?: () => void
}

const CouterTwo = ({ count, handleDecrement, handleIncrement }: CounterTwoProps) => {
    return (
        <div>

            <h1>
                CouterTwo {count}
            </h1>
            {handleIncrement && <button onClick={handleIncrement}>Increase</button>}
            {handleDecrement && <button onClick={handleDecrement}>Decrease</button>
            }
        </div>
    )
}

export default CouterTwo 