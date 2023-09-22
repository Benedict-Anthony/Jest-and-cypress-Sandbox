import { render, screen } from "@testing-library/react";
import About from "../components/About";

describe("About component test", () => {
    it("component render correctly", () => {
        render(<About />)
        const domElement = screen.getByText("About page")
        expect(domElement).toBeInTheDocument()
    })
})