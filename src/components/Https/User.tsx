import React, { Suspense, useEffect, useState } from 'react'

const User = () => {
    const [users, setUsers] = useState<{ name: string, id: number }[]>([])
    const [state, setState] = useState({
        error: false,
        loading: true
    })

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch("http://jsonplaceholder.typicode.com/users")
                if (!response.status) {
                    setState({
                        ...state,
                        error: true,
                        loading: false
                    })
                }
                setUsers(await response.json())
            } catch (error) {
                setState({
                    ...state,
                    error: false,
                    loading: false
                })
            }


        })()

    }, [])
    return (
        <Suspense fallback={<h1>Loadding</h1>}>
            <div>
                <h2>Users</h2>
                {state.error && <p>Error</p>}
                {state.loading && <p>Loadding</p>}
                <ul>
                    {users.length > 0 && users.map(user => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            </div>
        </Suspense>
    )
}

export default User