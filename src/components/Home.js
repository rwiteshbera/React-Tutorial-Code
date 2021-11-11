import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
   const [blogs, setBlogs] = useState([
       {title: "lorem1", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin venenatis euismod.", author: "Rwitesh" , id:1},
       {title: "lorem2", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin venenatis euismod.", author: "Mario", id:2},
       {title: "lorem3", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin venenatis euismod.", author: "Mario", id:3}
   ])

   const handleDelete = (id) => {
        const newBlogs = blogs.filter((blogs) => blogs.id !== id)
        setBlogs(newBlogs);
   }
    return (
        <div className="home">
           <BlogList blogsData = {blogs} title = "All Blogs" handleDelete={handleDelete}/>
        </div>
    );
}

export default Home;