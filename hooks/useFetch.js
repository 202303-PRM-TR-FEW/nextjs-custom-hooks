import {useEffect, useState} from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);

        fetch(url)
            .then(res => res.json())
            .then(resData => {
                setData(resData);
                setIsLoading(false);
            })
            .catch((err) => {
                setError(err);
                setIsLoading(false);
            });

    }, []);

    return [data, isLoading, error];
}

export default useFetch;