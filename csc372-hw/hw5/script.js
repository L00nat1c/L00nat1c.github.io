//const apiUrl = "https://api.github.com/users/L00nat1c/repos";

//tryed to use this from a YouTube video on how to display API data on HTML
const apiUrl = 'https://jsonplaceholder.typicode.com/users';

function getRepos() {
    fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error("Network Response was not ok");
        }
        return response.json;
    })

    .then((repoData) => {
        repoData.forEach(element => {
            const markup = '<li>${user.name}</li>';

            document.querySelector('ul').insertAdjacentHTML('beforeend', markup);
        });
    })

    .catch((error) => {
        console.error("Error: ", error);
    });
}

let myRepos = getRepos();
console.log('Repos we just fetched: ', myRepos);