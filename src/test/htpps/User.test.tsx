import { render, screen } from "@testing-library/react"
import User from "../../components/Https/User"
import { rest } from "msw"
import { server } from "../../mocks/server"

describe("User component", () => {
    test("if element is in DOM", () => {
        render(<User />)
        const h1Element = screen.getByRole("heading")
        expect(h1Element).toBeInTheDocument()
    })

    test.skip("make a http request to json server", async () => {
        render(<User />)
        const listOfUsers = await screen.findAllByRole("listitem")
        expect(listOfUsers).toHaveLength(1)

    })
    test("of the error is handled", async () => {
        render(<User />)
        server.use(

            rest.get("http://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
                setTimeout(() => {
                    return res(ctx.status(200))
                }, 300)
            })
        )
        const loadingMessage = await screen.findByText(/loading/i)


        expect(loadingMessage).toBeInTheDocument()
    })
})