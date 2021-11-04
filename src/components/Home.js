const Home = () => {
    const handleClick = () => {
        console.log('Hello Ninjas');
    }

    const handleClickAgain = (e) => {
        console.log(e.target);
    }
    return (
        <div className="home">
            <h1>Home Page</h1>
            <button onClick={handleClick}>Click Me</button>


            <button onClick={(e) => {
                handleClickAgain(e);
                }
            }>Click Me Again</button>
        </div>
    );
}

export default Home;