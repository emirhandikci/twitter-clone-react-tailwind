import React from 'react'

const container = ({ children }) => {
    return (
        <main className="flex w-1268 min-h-screen mx-auto bg-primary-dark text-blue-50">{children}</main>
    )
}

export default container