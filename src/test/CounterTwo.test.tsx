import { render, screen } from "@testing-library/react"
import CouterTwo from "../components/CouterTwo"
import userEvent from "@testing-library/user-event";

describe("Counter Two component", () => {
    test("if component render", () => {
        render(<CouterTwo count={0} />)
        const h1Element = screen.getByRole("heading")
        const buttonElemnts = screen.queryAllByRole("button")

        expect(h1Element).toBeInTheDocument()
        expect(buttonElemnts).toHaveLength(0)
    })

    test("If the click event are fired correctly", async () => {
        userEvent.setup()
        const handleIncrement = jest.fn()
        const handleDecrement = jest.fn()

        render(<CouterTwo
            count={0}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
        />)
        const increaseButton = screen.getByText(/increase/i)
        const decreaseButton = screen.getByText(/decrease/i)

        expect(increaseButton).toBeInTheDocument()
        expect(decreaseButton).toBeInTheDocument()

        await userEvent.click(increaseButton)
        await userEvent.click(decreaseButton)

        expect(handleIncrement).toBeCalled()
        expect(handleDecrement).toHaveBeenCalledTimes(1)

    })
})