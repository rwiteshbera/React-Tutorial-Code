import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
   const [blogs, setBlogs] = useState(null);
   const [isPending, setIsPending] = useState(true);


   const handleDelete = (id) => {
        const newBlogs = blogs.filter((blogs) => blogs.id !== id)
        setBlogs(newBlogs);
   }

   // Fetching data from JSON server using useEffect
   useEffect(() => {
    setTimeout(() => {
        fetch('http://localhost:8000/blogs')
    .then( res => {
        return res.json();
    })
    .then(data => {
        console.log(data);
        setBlogs(data);
        setIsPending(false); // Disappear loading message immediately when page loaded
    })
    }, 2000)
   }, []);

    return (
        <div className="home">
        {isPending && <div>Loading...</div>}
           {blogs && <BlogList blogsData = {blogs} title = "All Blogs" handleDelete={handleDelete}/>}
        </div>
    );
}

export default Home;