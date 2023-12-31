import { render, screen } from "@testing-library/react"
import { it, expect } from "vitest"
import Main from "../Shop"
import '@testing-library/jest-dom'


it('imali te2?',()=>{
    render(<Main/>)
    const message=screen.getByText("Robnite shop");
    expect(message).toBeInTheDocument();
})