import React, { FC } from 'react'
import styled from 'styled-components'

interface HeaderProps {}

const StyledHeader = styled.header`
    background-color: #282c34;
    padding: 20px;
    color: white;
    text-align: center;
    max-width: 800px;
    margin: 20px auto;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const Header: FC<HeaderProps> = () => <StyledHeader>Welcome</StyledHeader>

export default Header
