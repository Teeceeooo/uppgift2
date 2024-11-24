import React, { FC } from 'react'
import { styled } from 'styled-components'

interface AboutProps {}

const AboutContainer = styled.div`
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

const About: FC<AboutProps> = () => (
    <AboutContainer>
        In this app, you can search users from the{' '}
        <a
            href="https://jsonplaceholder.typicode.com/users"
            target="_blank"
            rel="noopener noreferrer"
        >
            https://jsonplaceholder.typicode.com/users
        </a>{' '}
        API while using useCallback, useReducer, axios and styled components.
    </AboutContainer>
)

export default About
