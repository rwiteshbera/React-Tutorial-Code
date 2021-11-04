import { useState } from "react";

const Home = () => {

    // let name = "FreeCodeCamp";
    const [name, setName] = useState("Mario");   
    const [age, setAge] = useState(20);   

    const handleClick = () => {
            setName("Brad");
            setAge(30);
    }

    return (
        <div className="home">
            <h1>Home Page</h1>
            <p>{name} is { age} years old.</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}

export default Home;