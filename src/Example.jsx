import { useEffect, useState } from "react"

function Example() {

    const [data, setData] = useState(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => setData(json))
    })
    return (
        <div>
            {data ? <h2>{data.title}</h2>: <p>Loading...</p>}
        </div>
    )
}

export default Example
