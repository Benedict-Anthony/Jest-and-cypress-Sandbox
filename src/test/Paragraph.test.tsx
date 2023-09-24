import { logRoles, render, screen } from "@testing-library/react"
import Paragraph from "../components/Paragraph"

describe("test the paragraph component", () => {
    test("if the text are well renderd", () => {
        const view = render(<Paragraph />)
        screen.debug()
        const paragraph = screen.getAllByText(/lorem/i)
        expect(paragraph).toHaveLength(2)
        // expect(paragraph).toHaveClass("container")

        const displayParagraph = screen.getByDisplayValue(/Benedict/i)
        expect(displayParagraph).toBeInTheDocument()

        const textID = screen.getByTestId("info")
        expect(textID).toBeInTheDocument()

        const contentElement = screen.getByText((content) => content.includes("lorem"))
        expect(contentElement).toBeInTheDocument()
        // expect(paragraph).toContainElement()\
        logRoles(view.container)
    })
})