import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
   const [blogs, setBlogs] = useState([
       {title: "lorem1", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin venenatis euismod.", author: "Rwitesh" , id:1},
       {title: "lorem2", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin venenatis euismod.", author: "Mario", id:2},
       {title: "lorem3", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin venenatis euismod.", author: "Mario", id:3}
   ])

   const [name, setName] = useState("Mario");

   const handleDelete = (id) => {
        const newBlogs = blogs.filter((blogs) => blogs.id !== id)
        setBlogs(newBlogs);
   }

   useEffect(() => {
        console.log("Use Effect Ran");
        console.log(name);
   }, [name]);

    return (
        <div className="home">
           <BlogList blogsData = {blogs} title = "All Blogs" handleDelete={handleDelete}/>
           <button onClick={() => setName("Lucifer")}>Change Name</button>
           <p>{name}</p>
        </div>
    );
}

export default Home;