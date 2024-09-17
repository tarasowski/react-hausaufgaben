import { useState } from "react";

function TextBox() {
    const [showText, setShowText] = useState(false)

    function handleClick() {
        console.log("click uaf den button")
        setShowText(true)
    }
    return (
        <div>
            <button onClick={handleClick}>Text zeigen</button>
            {showText === true ? <p>Das ist mein Text</p> : ""}
        </div>
    )
}

export default TextBox