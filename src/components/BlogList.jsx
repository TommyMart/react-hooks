// src/components/BlogList.jsx

import { useContext } from "react";
import { BlogContext, BlogDispatchContext } from "../context/BlogReducerContext";


export function BlogList (props){
    const state = useContext(BlogContext);
    const dispatch = useContext(BlogDispatchContext);

    return (
        <div>
            {state.map((blogPost) => {
                return (
                    <div key={blogPost.id}>
                    <h1>{blogPost.title}</h1>
                    <p>{blogPost.content}</p>
                    <button onClick={() => {dispatch({type:"delete", newData:{id: blogPost.id}})}}>
                        Delete
                    </button>
                </div>
                )
            })}
        </div>
    )
}