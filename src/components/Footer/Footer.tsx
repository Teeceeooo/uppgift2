import React, { FC } from 'react'
import styled from 'styled-components'

interface FooterProps {}

const StyledFooter = styled.footer`
    background-color: #282c34;
    padding: 20px;
    color: white;
    text-align: center;
    max-width: 800px;
    margin: 20px auto;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    a {
        color: #61dafb;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`

const Footer: FC<FooterProps> = () => (
    <StyledFooter>
        <a href="https://nohrs.dk" target="_blank" rel="noopener noreferrer">
            @nohrs.dk
        </a>
    </StyledFooter>
)

export default Footer
