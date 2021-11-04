import { useState } from "react";

const Home = () => {
    const [blogs] = useState([
        { title: 'My New Website', body: 'lorem ipsum...', author: "Rwitesh", id: 1 },
        { title: 'Javascript Tips', body: 'lorem ipsum...', author: "Mario", id: 2 },
        { title: 'React Project Ideas', body: 'lorem ipsum...', author: "Rwitesh", id: 3 },
        { title: 'React Project Ideas', body: 'lorem ipsum...', author: "Rwitesh", id: 4 }
    ]);

    return (
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by <strong>{blog.author}</strong></p>
                </div>
            ))}
        </div>
    );
}

export default Home;