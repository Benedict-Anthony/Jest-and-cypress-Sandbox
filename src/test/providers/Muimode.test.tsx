import { screen } from "@testing-library/react"
import Provider from "../../providers/Provider"
import MuiMode from "../../components/MuiMode"
import { render } from "../../test-utils/test-utils"

describe("MuiMode", () => {
    test("the current theme", () => {
        render(<MuiMode />)
        const h1Element = screen.getByRole("heading")
        expect(h1Element).toHaveTextContent("dark mode")
    })

})