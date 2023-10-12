import React from 'react'
import { headers } from 'next/headers'

const ApiFromServerPage = async () => {
    const res = await fetch('http://localhost:3000/api/example/', {
        method: 'GET',
        headers: headers()
    }).then(res => res.json())
    return (
        <div>
            <h1>ApiFromServerPage</h1>
            <div>name: {res?.name}</div>
        </div>
    )
}

export default ApiFromServerPage