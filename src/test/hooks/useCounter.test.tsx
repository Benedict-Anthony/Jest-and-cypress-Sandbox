import { renderHook } from "@testing-library/react";
import { useCounter } from "../../hooks/useCounter";
import { act } from "react-dom/test-utils";

describe('useCounter', () => {
    test("if initial render is 0", () => {
        const { result } = renderHook(useCounter)
        expect(result.current.count).toBe(0)
    })

    test("if the initial count is set", () => {
        const { result } = renderHook(useCounter, {
            initialProps: {
                initialCount: 10
            }
        })
        expect(result.current.count).toBe(10)
    })

    test("if the count function works", () => {
        const { result } = renderHook(useCounter)
        // result.current.increment()
        act(() => result.current.increment())
        expect(result.current.count).toBe(1)

        act(() => result.current.decrement())
        expect(result.current.count).toEqual(0)
        // result.
    })
})