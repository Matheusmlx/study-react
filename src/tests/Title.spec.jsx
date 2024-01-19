import React from "react"  
import { render, cleanup } from "@testing-library/react"
import '@testing-library/jest-dom'
import Title from "../components/Title"

describe('<Title/>', () => {

   it('renders children correctly', () => {
    const { getByText } = render(<Title>Test Children</Title>)
    expect(getByText('Test Children')).toBeInTheDocument();
   })

   afterAll(cleanup);
})
