const getData = async (url) => {
    const res = await fetch(url);

    if(!res.ok){
       throw new Error(`Error status:" ${res.status} from ${res.url}`)
    }
    
    return await res.json();
}

export {getData};