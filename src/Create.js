import { useState } from "react";

const Create = () => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('')
    const [isPanding, setIsPanding] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = {title, body, author}
        setIsPanding(true)

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
        console.log("nowy dodany");
        setIsPanding(false)
    })
    }
    return (
        <div className="create">
            <h2>dodaj bloga</h2>
            <form onSubmit={handleSubmit}>
                <label>Tytuł bloga:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Treść bloga:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                >
                </textarea>
                <label>autor bloga:</label>
                <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="andrzej">Andrzej</option>
                    <option value="mariola">Mariola</option>
                </select>
                {!isPanding && <button>Dodaj</button>}
                {isPanding && <button>Dodaje....</button>}
        
            </form>
        </div>
    );
}

export default Create;