import { logRoles, render, screen } from "@testing-library/react";
import Skills from "../components/Skills";
const skills = ["HTML", "CSS", "JavaScript"]
describe("skills components", () => {
    test("is skills array pressent", () => {
        render(<Skills skills={skills} />)
        const skillsUl = screen.getByTestId("skills")
        expect(skillsUl).toBeInTheDocument()
    })

    test("list item is present", () => {
        render(<Skills skills={skills} />)
        const listItems = screen.getAllByTestId("list-item")
        // expect(listItems).toBe("")
    })
})

describe("test the loggin state of user", () => {
    test.skip("if user is logged in", () => {
        render(<Skills skills={skills} />)
        const userName = screen.getByText((textContent) => textContent.startsWith("Benedict"))
        expect(userName).toHaveTextContent("Benedict Anthony")
        expect(userName).toBeInTheDocument()
    })

    test("test the click events", () => {
        render(<Skills skills={skills} />)
        const buttonElement = screen.getByRole("button", {
            name: "Click me"
        })
        expect(buttonElement).toBeInTheDocument()

    })

    test("user name is not present", () => {
        render(<Skills skills={skills} />)
        const userName = screen.queryByText(/benedict anthony/i)
        expect(userName).not.toBeInTheDocument()
    })

    test.only("user name is now present", async () => {
        const view = render(<Skills skills={skills} />)
        screen.debug()
        const userName = await screen.findByText("Benedict Anthony", {}, {
            timeout
                : 3000
        })
        screen.debug()
        expect(userName).toBeInTheDocument()
        logRoles(view.container)
    })
})