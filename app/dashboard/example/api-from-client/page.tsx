'use client'

import React, { Suspense, useEffect } from 'react'

const ApiFromClientPage = () => {
    const [name, setName] = React.useState('')
    useEffect(() => {
        fetch('/api/example')
            .then(res => res.json())
            .then(res => setName(res?.name))
    })
    return (
        <div>
            <h1>ApiFromClientPage</h1>
            <p>{name || '尚未设置姓名'}</p>
        </div>
    )
}

export default ApiFromClientPage