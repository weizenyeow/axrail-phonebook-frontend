import { useEffect, useState } from "react";
import { domain } from './domain';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        fetch(domain + "/api" + url, { signal: abortCont.singal })
            .then(res => {
                if (!res.ok) {
                    throw Error('Could not fetch the data for that resource. Please try again later.');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                if (err.name === 'AbortError'){
                    console.log('fetch aborted')
                } else {
                    setIsPending(false);
                    setError(err.message);
                }
            })
            return () => abortCont.abort();
    }, [url]);

    return { data, isPending, error };
}

export default useFetch;