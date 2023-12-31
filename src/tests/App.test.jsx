import { render, screen } from "@testing-library/react"
import { it, expect } from "vitest"
import App from "../App"
import '@testing-library/jest-dom'


it('imali te?',()=>{
    render(<App/>)
    const message=screen.getByText("Hello, World");
    expect(message).toBeInTheDocument();
})