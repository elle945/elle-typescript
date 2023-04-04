import React, { useState, useEffect } from 'react'

interface Data {
    id: number
    name: string
}

const Fetch = () => {
    const [data, setData] = useState<Data[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://avancera.app/cities')
            const jsonData = await response.json()
            setData(jsonData)
        }
        fetchData()
    }, [])
    return (
        <div>
            <h2>Cities</h2>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    )
}
export default Fetch
