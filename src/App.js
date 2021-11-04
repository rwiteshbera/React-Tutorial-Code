import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <>
      <div className="App">
        <h1 className="title">The Rwitesh Blog</h1>
        <Navbar />
      </div>
      
      <div className="content">
        <Home />
      </div>
    </>
  );
}

export default App;
