import { useState } from "react"

function Counter(){

    const[count,setCount] = useState(0)

    function increase(){
        setCount(count+1)
    }

    function decrease(){
        setCount(count-1)
        if(count<=0){
            setCount(0)
        }
    }

    function reset(){
        setCount(0)
    }
return(
    <>
    <h1>Use State Hook Example</h1>
    <p>You have clicked {count} Times</p>
    <button onClick={increase}>Increase</button>
    <button onClick={decrease}>Decrease</button>
    <button onClick={reset}>Reset</button>
    </>
)
}

export default Counter