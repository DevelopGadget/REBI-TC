'use strict';

function http_postUpload(url, formData) {
    return fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, cors, *same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'multipart/form-data',
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // no-referrer, *client
        body: formData, // body data type must match "Content-Type" header
    }).then(response => response.json()); // parses JSON response into native Javascript objects
}