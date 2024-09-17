
function CounterWithoutState() {
    let count = 10 // << das hier muss in state gesetzt werden oder sollte daraus ein state werden
    // sobald daraus ein state wird, werden die werten unten {count} neu gerendert
    // const [count, setCount] = useSate(10) <<< das ist destructuring

    function handleIncrement() {
        console.log('Increment')
        count = count + 1
        console.log("das ist nach incremetn", count)
    }

    function handleDecrement() {
        console.log('Decrement')
        count = count - 1
        console.log("das ist nach decrement", count)
    }

    return (
        <div>
            <p>Counter value: {count} </p>
            <button onClick={handleIncrement}>Increment +</button>
            <button onClick={handleDecrement}>Decrement -</button>
        </div>
    )
}

export default CounterWithoutState