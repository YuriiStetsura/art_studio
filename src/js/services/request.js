async function postData(url, body) {
    const res = await fetch(url, {
        method: 'Post',
        headers: {
            'Content-type' : 'application/json'
        },
        body: body
    });
    
    return await res.json();
}

async function getData(url) {
    const res = await fetch(url, {
        method: 'Get',
    });
    
    return await res.json();
}

export {postData, getData};