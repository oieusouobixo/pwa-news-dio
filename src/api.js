const PARAMS = {
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
}
const URL = "http://localhost:3000/api"

function getNews(subject) {
    return fetch(`${URL}/${subject}`, PARAMS)
        .then((response) => response.json())
        .catch((err) => {
            console.error('there was an err', err)
        })
}

function getNewsById(subject, id) {
    return fetch(`${URL}/${subject}`, PARAMS)
        .then((response) => response.json())
        .catch((err) => {
            console.error('there was an err', err)
        })
}

export default {
    getNews,
    getNewsById
}