// src/components/BlogForm.jsx

import { useContext, useState } from "react";
import { BlogDispatchContext } from "../context/BlogReducerContext";


export function BlogForm(props){
    
    const dispatch = useContext(BlogDispatchContext);


    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    
    const handleChangeTitle = (event) => {
        // Do front-end validations here.
        setTitle(event.target.value);
    }

    const handleChangeContent = (event) => {
        // Do front-end validations here.
        setContent(event.target.value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Do front-end validations here.
        console.log("This data was just submitted via form:\n" + JSON.stringify({title, content}));
        dispatch({type:"create", newData: {title, content}});

    }

    return (
        <div>
            <form onSubmit={handleFormSubmit} >
                <label>Title:</label>
                <input type="text" value={title} onChange={handleChangeTitle} />
                <label>Content:</label>
                <input type="text" value={content} onChange={handleChangeContent} />
                <button type="submit" >Submit</button>
            </form>
            
        </div>
    );
}