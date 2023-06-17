import React, {useEffect, useState} from 'react';
import useFetch from "@/hooks/useFetch";

function Todos() {

    const [data, isLoading, error] = useFetch('https://jsonplaceholder.typicode.com/todos');

    return (
        <div>
            <h3>Todos Page</h3>
            {isLoading && <div className="loader"></div>}
            {!isLoading &&
                <ul>
                    {data.map(todo => {
                        return <li key={todo.id}>{todo.title}</li>
                    })}
                </ul>
            }

            {error && <p>An error occurred!</p>}
        </div>
    );
}

export default Todos;