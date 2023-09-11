const inputUser = document.querySelector("#input_user");
const btnSearch = document.querySelector("#btn_search");
const imageUser = document.querySelector("#image_user");
const userName = document.querySelector("#name_user");
const locationName = document.querySelector("#location_name");
const followers = document.querySelector("#followers");
const following = document.querySelector("#following");
const userBio = document.querySelector("#user_bio");
const profileUrl = document.querySelector("#profile_url");

const user = "GabrielH89";

const findUser = async () => {
    try {
        const inputValue = inputUser.value.trim()
        if(inputValue.length > 0) {
            axios.get(`https://api.github.com/users/${inputUser.value}`)
        .then(response => {
            console.log(response.data)
            imageUser.src = response.data.avatar_url;
            userName.textContent = response.data.name;
            locationName.textContent = response.data.location;
            followers.textContent = response.data.followers;
            following.textContent = response.data.following;
            userBio.textContent = response.data.bio;
            profileUrl.href = response.data.html_url;
            profileUrl.textContent = response.data.html_url;
        })
        .catch(err => {
            console.log("Ocurred this error: " + err);
        })
        }else{
            alert("Insira um nome válido")
        }
    }catch(err) {
        console.log("Error: " + err)
    }
}

const handleKeyPress = (e) => {
    if(e.key === "Enter") {
        e.preventDefault();
        findUser();
    }
}

inputUser.addEventListener("keydown", handleKeyPress);

btnSearch.addEventListener("click", (e) => {
    e.preventDefault();
    findUser();
})

