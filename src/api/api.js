const SERVER_URL = 'http://localhost:4000/discussions';

export function fetchDiscussions() {
    return fetch(SERVER_URL).then(res => res.json());
}