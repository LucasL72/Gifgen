console.log("coucou");

const url = 'https://api.chucknorris.io/jokes/random';
const ban = document.getElementById("ban");

function getDataJoke() {
    console.log('fn')
    fetch(url)
        .then(res => res.json())
        .then(data => {
            const joke = data.value
            console.log("joke");
            changejoke(joke);
        })
        .catch((err) => console.log(err));
}


function changejoke(content) {
    const banner = document.getElementById("banner");
    banner.innerText = content;

}

setInterval(function () {getDataJoke()}, 15000)

// Creer le boutton

function buildButton() {

    const container = document.createElement("div");
    container.setAttribute("class", "container");

    const row = document.createElement("div");
    row.setAttribute("class", "row");

    const marg = document.createElement("div")
    marg.setAttribute("class","d-flex justify-content-center")

    const btn = document.createElement("button");
    btn.setAttribute("class", "btn btn-primary");
    btn.setAttribute("onclick", "getDataJoke()");
    btn.innerText = "Cliquez-ici";

    ban.appendChild(container);
    container.appendChild(row);
    row.appendChild(marg);
    marg.appendChild(btn);

}

function buildBanner() {
    const container = document.createElement("div");
    container.setAttribute("class", "container");

    const row = document.createElement("div");
    row.setAttribute("class", "row");

    const banner = document.createElement("div");
    banner.setAttribute("class", "alert alert-primary text-center");
    banner.setAttribute("id", "banner");
    banner.innerText = "wait on load !";

    ban.appendChild(container);
    container.appendChild(row);
    row.appendChild(banner);
}



function mountedComponents() {
    buildBanner()
    buildButton()
    getDataJoke()
}

mountedComponents()