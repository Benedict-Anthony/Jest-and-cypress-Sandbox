import { render, screen } from "@testing-library/react"
import Form from "../components/Form"

describe("test the form components", () => {
    test("the aria is correctly labeled", () => {
        render(<Form />)
        const textElement = screen.getByRole("textbox", {
            name: "Name",
        })

        expect(textElement).toBeInTheDocument()

        const dropDown = screen.getByRole("combobox")
        expect(dropDown).toBeInTheDocument()

        const formElement = screen.getByRole("form-element")
        expect(formElement).toBeInTheDocument()

        const checkbox = screen.getByRole("checkbox")
        expect(checkbox).toBeInTheDocument()

        const buttonElement = screen.getByRole("button")
        expect(buttonElement).toBeInTheDocument()
        expect(buttonElement).toBeEnabled()

    })



})
