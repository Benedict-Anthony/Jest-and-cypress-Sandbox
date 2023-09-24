import { logDOM, logRoles, render, screen } from "@testing-library/react"
import user from "@testing-library/user-event"
import Couter from "../components/Couter"

describe("test the Couter component", () => {
    test("if the user input is present", () => {
        const view = render(<Couter />)
        logDOM(view.container)
        const inputElement = screen.getByTestId("counter")
        expect(inputElement).toBeInTheDocument()
    })
})

describe("test the Couter states ", () => {
    test("if button update couter", () => {
        render(<Couter />)
        const h1Element = screen.getByRole("heading", {
            level: 1
        })

        expect(h1Element).toBeInTheDocument()

        const incrementButton = screen.getByTestId("increment")
        const decrementButton = screen.getByTestId("decrement")

        expect(incrementButton).toBeInTheDocument()
        expect(decrementButton).toBeInTheDocument()

    })

    test("if the initial state of counter is 0", () => {
        render(<Couter />)
        const h1Element = screen.getByRole("heading", { level: 1 })
        expect(h1Element).toHaveTextContent("0")

        const h2Element = screen.getByRole("heading", { level: 2 })
        expect(h2Element).toHaveTextContent("0")
    })

    test("render a count of 1 on click of the increment button", async () => {
        user.setup()
        render(<Couter />)
        const incrementButton = screen.getByTestId("increment")
        // const decrementButton = screen.getByTestId("decrement")

        expect(incrementButton).toBeInTheDocument()
        // expect(decrementButton).toBeInTheDocument()

        await user.click(incrementButton)
        // await user.click(incrementButton)

        const h1Element = screen.getByRole("heading", { level: 1 })
        expect(h1Element).toHaveTextContent("1")
    })

    test("render a count of 0 on click of the decrement button", async () => {
        user.setup()
        render(<Couter />)
        const decrementButton = screen.getByTestId("decrement")
        const incrementButton = screen.getByTestId("increment")

        expect(incrementButton).toBeInTheDocument()

        await user.click(incrementButton)

        // const decrementButton = screen.getByTestId("decrement")

        expect(decrementButton).toBeInTheDocument()
        // expect(decrementButton).toBeInTheDocument()

        await user.click(decrementButton)

        const h1Element = screen.getByRole("heading", { level: 1 })
        expect(h1Element).toHaveTextContent("0")
    })

    test("test the input form", async () => {
        user.setup()
        const view = render(<Couter />)
        const h1Element = screen.getByRole("heading", { level: 2 })
        const inputElement = screen.getByTestId("counter")
        expect(inputElement).toBeInTheDocument()

        await user.type(inputElement, "10")
        expect(inputElement).toHaveValue(10)
        expect(h1Element).toHaveTextContent("10")
        // logDOM(view.container)
    })

    test("if input and button are focused correctly", async () => {
        user.setup()
        render(<Couter />)
        const decrementButton = screen.getByTestId("decrement")
        const incrementButton = screen.getByTestId("increment")
        const inputElement = screen.getByRole("spinbutton")
        await user.tab()
        expect(inputElement).toHaveFocus()
        await user.tab()
        expect(incrementButton).toHaveFocus()
        await user.tab()
        expect(decrementButton).toHaveFocus()
    })
})