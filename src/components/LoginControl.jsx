/*
Aufgabe 3: Bedingtes Rendering in React Aufgabe: Erstelle eine Komponente namens LoginControl ✅, 
die je nach Zustand entweder einen "Login"- oder einen "Logout"-Button anzeigt ✅. 
Wenn der Benutzer eingeloggt ist, sollte der "Logout"-Button erscheinen, 
und wenn er nicht eingeloggt ist, der "Login"-Button. 
Der Zustand sollte beim Klicken auf die Buttons geändert werden.
*/
import { useState } from "react";

function LoginControl() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPasswort] = useState("")
    const [searchValue, setSearchValue] = useState("")

    function handleLogin() {
        setIsLoggedIn(true)
    }

    function handleLogout() {
        setIsLoggedIn(false)

    }

    function handleUsername(e) {
        const value = e.target.value
        setUsername(value)
        console.log("das ist mein username", username)
    }

    function handlePassword() {
        console.log("das ist meine password in plaintext", password)
        // das gleich wie bei username aus hier
    }

    function handleSearch(e) {
        const value = e.target.value
        console.log("das ist meine search", value)

    }
    return (
        <div>
            <h1>Das ist mein Login Control</h1>
            <input type="search" onInput={handleSearch} />
            <input type="text" onInput={handleUsername} placeholder="Dein Username" />
            <input type="password" onInput={handlePassword} placeholder="Dein Passwort" />
            {/* show/hide oder zeigen/verstecken */}
            {isLoggedIn === false
                ? <button onClick={handleLogin}>Mein Login</button>
                : <button onClick={handleLogout}>Mein Logout</button>}
            {/* 
            {isLoggedIn === false && <button>Mein Login</button>}
            {isLoggedIn === true && <button>Mein Logout</button>}
            */}
        </div>
    )
}

export default LoginControl