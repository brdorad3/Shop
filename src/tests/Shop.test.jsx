import { render, screen } from "@testing-library/react"
import { it, expect } from "vitest"
import Home from "../Shop"
import '@testing-library/jest-dom'


it('imali te2?',()=>{
    render(<Home/>)
    const message=screen.getByText("Robnite shop");
    expect(message).toBeInTheDocument();
})