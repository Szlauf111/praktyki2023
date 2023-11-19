const sprawdz =(odp)=> {
    if (odp.status == 200) {
        return odp.json();
    } else {
        throw new Error('błąd w pobieraniu danych');
    }
};

const post =(json)=> {
    for (const post of json) {
        console.log('Tytuł:', post.title);
        console.log('Treść:', post.body);
    }
};

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(sprawdz)
    .then(post)
    .catch(error => console.error('error:', error));

fetch('https://jsonplaceholder.typicode.com/posts2')
    .then(sprawdz)
    .then(post)
    .catch(error => console.error('error:', error));