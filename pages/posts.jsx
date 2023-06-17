import React from 'react';
import useFetch from "@/hooks/useFetch";

function Posts(props) {

    const [posts, isLoading] = useFetch('https://jsonplaceholder.typicode.com/posts');

    return (
        <div>
            <h3>Posts Page</h3>
            {isLoading && <div className="loader"></div>}
            {!isLoading &&
                <ul>
                    {posts.map(post => {
                        return <li key={post.id}>{post.title}</li>
                    })}
                </ul>
            }
        </div>
    );
}

export default Posts;