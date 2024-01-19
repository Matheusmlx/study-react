import React from 'react'
import Color from '../components/Color'
import '@testing-library/jest-dom'
import { render, cleanup } from '@testing-library/react'

jest.mock('../ColorProvider', () => ({
    useColors: jest.fn(() => ({
      rateColor: jest.fn(),
      removeColor: jest.fn(),
    })),
  }));

describe('Color', () => {
    it('renders children correctly', () => {
       const { getByText, getByTestId } = render(
        <Color id="1" title="Test Color" color="#ff0000" rating={3} />
        );

    expect(getByText('Test Color')).toBeInTheDocument();
    expect(getByTestId('color-box')).toHaveStyle('background-color: #ff0000');
    })
})