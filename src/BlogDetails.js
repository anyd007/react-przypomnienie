import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id} = useParams()
    const {data: blog, isPanding, error} = useFetch('http://localhost:8000/blogs/' + id)

    return (
        <div className="blog-details">
            {isPanding && <div>wczytywanie...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>napisane przez {blog.author}</p>
                    <div>{blog.body}</div>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;