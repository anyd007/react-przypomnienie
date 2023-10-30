
import BolgLists from "./BlogLists";
import useFetch from "./useFetch";

const Home = () => {
   const {data: blogs, isPanding, error} = useFetch('http://localhost:8000/blogs')

    return (
     <div className="home">
        {error && <div>{error}</div>}
        {isPanding && <div>Wczytywanie...</div>}
        {blogs && <BolgLists blogs={blogs} title="Wszystkie blogi" />}
     </div>
    );
}

export default Home;