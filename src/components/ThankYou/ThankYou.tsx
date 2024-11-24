import React, { FC } from 'react'
import { styled } from 'styled-components'

interface ThankYouProps {}

const ThankYouContainer = styled.div`
    padding: 20px;
    margin: 20px auto;
    max-width: 800px;
    text-align: center;
    font-family: Arial, sans-serif;
    font-size: 18px;
    line-height: 1.6;
    background-color: #f8f9fa;
    color: #333;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    a {
        color: #007bff;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`

const ThankYou: FC<ThankYouProps> = () => (
    <ThankYouContainer>
        Thank you for testing this app. Perhaps play the game{' '}
        <a
            href="https://nohrs.dk/pixelatedforest"
            target="_blank"
            rel="noopener noreferrer"
        >
            The Pixelated Forest
        </a>{' '}
        originally written in Python, but ported to React?
    </ThankYouContainer>
)

export default ThankYou
