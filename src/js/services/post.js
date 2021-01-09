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

export default postData;