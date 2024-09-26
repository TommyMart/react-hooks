// src/reducers/BlogReducer.js

const initialBlogPosts = [
    {
        id: 1,
        title: "Welcome to your new blog!",
        content: "Have fun! Become the next big blogger! Woohoo!"
    }
]

const blogReducer = (previousState, instructions) => { 

    // Declare anything used by all possible instruction types
    let stateEditable = null;

    switch (instructions.type){
        case "create":
            // Make a copy of previous state:
            stateEditable = [...previousState]

            // Do any data validation on the incoming data:
            if (instructions.newData.title.length <= 1){
                console.log("New post title is too short.");
                return previousState;
            }
            if (instructions.newData.content.length <= 1){
                console.log("New post content is too short.");
                return previousState;
            }

            // Do any necessary things to the incoming data"
            // Give the post an ID based on how many posts currently exist in state:
            instructions.newData.id = stateEditable.length + 1;
            // Make the title have a capital letter at the start:
            instructions.newData.title = instructions.newData.title.charAt(0).toUpperCase() + instructions.newData.title.slice(1);
            // Same as above but for the post content:
            instructions.newData.content = instructions.newData.content.charAt(0).toUpperCase() + instructions.newData.content.slice(1);

            // Modify state:
            stateEditable.push(instructions.newData);

            // Return the new state:
            return stateEditable;
            
        case "delete":
            // Make a copy of previous state:
            stateEditable = [...previousState]

            // Return the state without the object that we want deleted:
            return stateEditable.filter(post => post.id !== instructions.newData.id);
        default:
            // invalid instructions provided!
            return previousState;
    }
}

module.exports = {
    blogReducer, initialBlogPosts
}