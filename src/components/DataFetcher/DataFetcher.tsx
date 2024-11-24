import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UserCard from '../UserCard/UserCard'

interface DataFetcherProps {
    searchQuery: string
}

interface User {
    id: number
    name: string
    email: string
}

const DataFetcher: React.FC<DataFetcherProps> = ({ searchQuery }) => {
    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then((response) => setUsers(response.data))
            .catch((error) => console.error('Error fetching data:', error))
    }, [])

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <div>
            <h2>Users</h2>
            <div>
                {filteredUsers.map((user) => (
                    <UserCard
                        key={user.id}
                        name={user.name}
                        email={user.email}
                    />
                ))}
            </div>
        </div>
    )
}

export default DataFetcher
