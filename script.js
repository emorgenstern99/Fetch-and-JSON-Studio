// TODO: add code here
// Add code that runs on the window load event.
// This is done because we can't interact with the HTML elements until the page has loaded.
window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then( function(response) {
        // console.log(response);
        response.json().then(function(json) {
            console.log(json);
            let numberOfAstronauts = json.length;
            let container = document.getElementById("container");for (let index = 0; index < numberOfAstronauts; index++) {
                container.innerHTML += `
                    <div class="astronaut">
                        <div class="bio">
                        <h3>${json[index].firstName} ${json[index].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${json[index].hoursInSpace}</li>
                            <li>Active: ${json[index].active}</li>
                            <li>Skills: ${json[index].skills}</li>
                        </ul>
                        </div>
                        <img class="avatar" src="${json[index].picture}">
                    </div>
                `;
            }
        })
    })
});