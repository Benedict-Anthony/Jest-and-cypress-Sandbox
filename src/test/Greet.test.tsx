import { render, screen } from "@testing-library/react"
import Greet from "../components/Greet"



describe("test the greet components", () => {
    test("Greet components renders correctly", () => {
        render(<Greet />)
        const textElemet = screen.getByText("Greet")
        expect(textElemet).toBeInTheDocument()
    })

    test("Greet the user with the name provided", () => {
        render(<Greet name=" Benedict" />)
        const textElement = screen.getByText(/greet benedict/i)
        // const getDom = screen.getByText("Hello ")
        expect(textElement).toBeInTheDocument()

    })
})