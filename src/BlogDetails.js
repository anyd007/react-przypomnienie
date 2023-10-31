import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id} = useParams()
    const {data: blog, isPanding, error} = useFetch('http://localhost:8000/blogs/' + id)
    const navigate = useNavigate()

    const handleClick = () =>{
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        }).then(() =>{
            navigate('/')
        })
    }

    return (
        <div className="blog-details">
            {isPanding && <div>wczytywanie...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>napisane przez {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>usuń</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;