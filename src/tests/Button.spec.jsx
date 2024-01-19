import React from 'react'
import Button from '../components/Button'
import '@testing-library/jest-dom'
import { render, cleanup } from '@testing-library/react'

describe('Button', () => {
    it('renders children correctly', () => {
        const { getByText } = render(<Button label="Cadastrar"/>)
        expect(getByText('Cadastrar')).toBeInTheDocument();
    })

    afterAll(cleanup)
})