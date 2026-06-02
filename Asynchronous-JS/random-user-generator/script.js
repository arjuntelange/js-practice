const profilePicture = document.getElementById("profile-picture");
const userName = document.getElementById("user-name");
const userEmail = document.getElementById("user-email");
const generateBtn = document.getElementById("generate-user");


async function generateUser() {
    userName.textContent = "Loading...";
    userEmail.textContent = ""

    const response = await fetch (
        "https://randomuser.me/api/"
    )
    const data = await response.json();

    const firstName = data.results[0].name.first;
    const lastName = data.results[0].name.last;
    console.log(data.results[0].picture.large);

    userName.textContent = `${firstName} ${lastName}`;
    userEmail.textContent = data.results[0].email;
    profilePicture.src = data.results[0].picture.large;
}

generateBtn.addEventListener( "click", generateUser );