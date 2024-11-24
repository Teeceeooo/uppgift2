import React, { FC } from 'react'
import styled from 'styled-components'

interface UserCardProps {
    name: string
    email: string
}

const Card = styled.div`
    border: 1px solid #ccc;
    padding: 4px;
    margin: 4px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`

const UserCard: FC<UserCardProps> = ({ name, email }) => (
    <Card>
        <h4>{name}</h4>
        <p>{email}</p>
    </Card>
)

export default UserCard
