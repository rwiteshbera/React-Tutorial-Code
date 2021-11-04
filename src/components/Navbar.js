const Navbar = () => {
    return (  
        <>
        <nav className="navbar">
            <div className="links">
                <a href="/">Home</a>
                <a href="/blogs">Blogs</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: '8px',
                    padding: '5px'
                }}>Create Blog</a>
            </div>
        </nav>
        </>
    );
}
 
export default Navbar;