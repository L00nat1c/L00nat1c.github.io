const apiUrl = "https://api.github.com/users/L00nat1c/repos";

function getRepos() {
    fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error("Network Response was not ok");
        }
        return response.json;
    })

    .then((repoData) => {
        console.log('Repos resolved: My Repo Data:', repoData);
    })

    .catch((error) => {
        console.error("Error: ", error);
    });
}

let myRepos = getRepos();
console.log('Repos we just fetched: ', myRepos)