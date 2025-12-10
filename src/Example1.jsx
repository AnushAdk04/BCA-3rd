import { useRef, useState } from "react"

function Example1() {

    const click  = useRef(0)
    const[render,setRender] = useState(false)

    function handleClick(){
        click.current++
        console.log("Click:" ,click.current )
    }
    
    function handleRender(){
        setRender(!render)
    }
  return (
    <div>
        <h2>Use Ref Example</h2>
        <p>Clicks: {click.current}</p>
        <button onClick={handleClick}>Click Me</button>
        <button onClick={handleRender}>Refresh UI</button>
    </div>
  )
}

export default Example1