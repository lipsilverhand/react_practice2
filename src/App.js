import { useState } from "react";
import "./App.css"



const App = () => {
    const [count, setCount] = useState(0);

    function clickAdd() {
        setCount(count + 1);
    }

    function clickSub() {
        setCount(count - 1);
    }

    function clickReset() {
        setCount(0);
    }

    return (
        <div className="App">
            <div className="panel">
                <p>{count}</p>
                <button onClick={clickAdd} className="add">ADD</button>
                <button onClick={clickSub} className="sub">SUB</button>
                <button onClick={clickReset} className="reset">RESET</button>
            </div>
        </div>
    )
}

export default App;