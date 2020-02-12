import React , {useState} from "react"


function ComponentButton(){
    const [counter, setCounter] = useState(0)
    const [mudou, setMudou] = useState("")

    return (
        <>
            <h2> Contador {counter}</h2>
            <button onClick={() => setCounter(counter + 1)}>Clicar</button>

            <h2> Onchange {mudou}</h2>
            <input onChange={(event) => setMudou(event.target.value)}/>
        </>
    
    )
}


function App2(){

    return (
        <ComponentButton />
    )
}

export default App2