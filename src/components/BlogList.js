const BlogList = ( {blogsData,title, handleDelete}) => {
    // const blogs = props.blogsData;
    // const title = props.title;

    return (
        <div className="blog-list">
        <h2>{title}</h2>
        {blogsData.map((e) => (
            <div className="blogs-preview" key={e.id}>
                <h3>{e.title}</h3>
                <p>{e.body}</p>
                <button onClick={() => handleDelete(e.id)}>Delete Blog</button>
            </div>
        ))}
        <br />
        </div>
    )
}

export default BlogList;